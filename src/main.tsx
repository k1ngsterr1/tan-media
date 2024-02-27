import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

import "@shared/styles/global.scss";
import "@shared/styles/scrollbar.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
