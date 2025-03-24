import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Sales } from "./screens/Sales";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Sales />
  </StrictMode>,
);
