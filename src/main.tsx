import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./scss/utils/imports.scss";
import "./scss/utils/_animations.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <p>yoooo</p>
  </StrictMode>
);
