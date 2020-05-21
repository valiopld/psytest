import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./header/header.component";
import Main from "./main/main.component";
import Footer from "./footer/footer.component";

import "./App.css";

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
