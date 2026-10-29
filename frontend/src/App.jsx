// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> App.jsx

// Chakra UI components
import { Box, useColorModeValue } from "@chakra-ui/react";

// React Router components
import { Route, Routes } from "react-router-dom";

// Application pages and layout
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";

/**
 * Main application compo*ent.
 */
function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {/* Application navigat*on */}
        <Navbar />
        {/* Application routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

// Export application component
export default App;
