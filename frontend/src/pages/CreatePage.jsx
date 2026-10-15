// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> CreatePage.jsx

import { Container, VStack } from "@chakra-ui/react";

// ?
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}></VStack>
    </Container>
  );
};

// ?
export default CreatePage;
