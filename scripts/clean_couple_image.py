"""One-time script: generate a clean wedding couple illustration via Nano Banana."""
import asyncio
import base64
import os
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")


async def main():
    dst = "/app/frontend/public/assets/couple.png"

    api_key = os.getenv("EMERGENT_LLM_KEY")
    chat = (
        LlmChat(
            api_key=api_key,
            session_id="wedding-couple-gen",
            system_message="You are an artist creating wedding illustrations.",
        )
        .with_model("gemini", "gemini-3.1-flash-image-preview")
        .with_params(modalities=["image", "text"])
    )

    msg = UserMessage(
        text=(
            "Create a beautiful high-quality cartoon illustration in cute chibi 3D style of a "
            "young Muslim wedding couple, standing side by side, smiling happily. "
            "The groom on the left: elegant black tuxedo with white shirt, black bow tie, black "
            "trousers, short tidy brown hair, warm blushed cheeks, gentle joyful smile. "
            "The bride on the right: flowing long-sleeved ivory-white wedding gown with soft lace, "
            "a delicate white hijab and veil draping gracefully over her shoulders, holding a "
            "bouquet of peach and cream roses with green leaves, warm blushed cheeks, big bright "
            "eyes, sweet smile. "
            "Both fully visible from head to toe, warm soft pastel shading, polished vector-cartoon "
            "rendering, plain pure white background, no text, no logos, no watermarks, "
            "centered composition, portrait orientation."
        ),
    )

    text, images = await chat.send_message_multimodal_response(msg)
    print("Text response:", text[:120] if text else "")

    if not images:
        print("ERROR: no images returned")
        return

    img = images[0]
    image_bytes = base64.b64decode(img["data"])
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    with open(dst, "wb") as f:
        f.write(image_bytes)
    print(f"Saved to {dst} ({len(image_bytes)} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
