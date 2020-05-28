import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
function AppWrapper() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default AppWrapper;
