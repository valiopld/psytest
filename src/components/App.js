import React from "react";
import "./App.css";

import Header from "./header/header.component.jsx";
import Main from "./main/main.component.jsx";
import Footer from "./footer/footer.component.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
