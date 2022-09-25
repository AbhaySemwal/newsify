import React from "react";
import Navbar from "./Navbar";
import Mustread from "./Mustread";
import Trending from "./Trending";
import Economy from "./Economy";
import Sciandcult from "./Sciandcult";
import More from "./More";
import Footer from "./Footer";
function App() {
  return (
    <div>
    <Navbar />
    <Mustread />
    <Trending />
    <Economy />
    <Sciandcult />
    <More />
    <Footer />
  </div>
  );
}

export default App;