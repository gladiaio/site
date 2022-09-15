import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

if (document.location.hash === "#contact") {
  document.location.href = document.location.href.split("#")[0] + "#/contact";
  document.location.reload();
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
