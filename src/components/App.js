import React from "react";
import "./App.css";

import Header from "./header/header.component";
import Slider from "./slider/slider.component";
import Footer from "./footer/footer.component";
function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Slider slides="10" />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
