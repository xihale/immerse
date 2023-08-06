import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/immerse/"><App/></BrowserRouter>);