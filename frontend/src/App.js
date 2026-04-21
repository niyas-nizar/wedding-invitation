import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App bg-aesthetic" data-testid="app-root">
      <main>
        <Hero />
        <Events />
        <Footer />
      </main>
    </div>
  );
}
