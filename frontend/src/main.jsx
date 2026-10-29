// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> main.jsx

// React strict mode
import { StrictMode } from "react";

// Chakra UI provider
import { ChakraProvider } from "@chakra-ui/react";

// React Router provider
import { BrowserRouter } from "react-router-dom";

// React DOM renderer
import { createRoot } from "react-dom/client";

// Root application component
import App from "./App.jsx";

// Render application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Chakra UI context */}
    <ChakraProvider>
      {/* Application router */}
      <BrowserRouter>
        {/* Root application */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
