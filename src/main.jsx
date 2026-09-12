import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TripProvider } from "./context/TripContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TripProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 3000,
          }}
        />
      </BrowserRouter>
    </TripProvider>
  </StrictMode>,
);
