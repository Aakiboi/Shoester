import React from "react";
import Navbar from "../src/components/navbar"
import Home from "./components/home";
import Content from "./components/content";
import Collections from "./components/collections";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Content />
      <Collections />
      <Footer />

    </>

  );
}

export default App;
