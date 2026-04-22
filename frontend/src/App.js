import React from "react";
import "./App.css";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App bg-aesthetic" data-testid="app-root">
      <Loader />
      <main>
        <Hero />
        <Events />
        <Footer />
      </main>
    </div>
  );
}
