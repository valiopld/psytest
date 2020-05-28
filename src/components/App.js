import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./header/header.component.jsx";
import Main from "./main/main.component.jsx";
import Footer from "./footer/footer.component.jsx";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
