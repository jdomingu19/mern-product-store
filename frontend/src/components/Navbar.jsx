// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> Navbar.jsx

// Chakra UI components
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

// React Router
import { Link } from "react-router-dom";

// Chakra UI Icons
import { PlusSquareIcon } from "@chakra-ui/icons";

// React Icons
import { IoMoon } from "react-icons/io5";

import { LuSun } from "react-icons/lu";

/**
 * Application navigation bar.
 */
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        {/* Application logo and home navigation */}
        <Text
          fontSize={{ base: "22", sm: 28 }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        {/* Navigation actions */}
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

// Export navbar component
export default Navbar;
