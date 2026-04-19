import React, { useState, useEffect } from "react";
import "./App.css";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Nikkah from "./components/Nikkah";
import Reception from "./components/Reception";
import Footer from "./components/Footer";

export default function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [opened]);

  return (
    <div className="App" data-testid="app-root">
      {!opened && <Envelope onOpen={() => setOpened(true)} />}
      <main>
        <Hero />
        <Nikkah />
        <Reception />
        <Footer />
      </main>
    </div>
  );
}
