// MERN Product Store App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> HomePage.jsx

// Chakra UI components
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";

// React built-in hook
import { useEffect } from "react";

// React Router components
import { Link } from "react-router-dom";

// Global product store
import { useProductStore } from "../store/product";

// Product card component
import ProductCard from "../components/ProductCard";

/**
 * Product listing page.
 */
const HomePage = () => {
  // Product store state and actions
  const { fetchProducts, products } = useProductStore();

  /**
   * Loads products on page mount.
   */
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        {/* Page heading */}
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        {/* Product grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {/* Empty state */}
        {products.length === 0 && (
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"gray.500"}
          >
            No products found 😢 {""}
            <Link to={"/create"}>
              <Text
                as={"span"}
                color={"blue.500"}
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

// Export home page component
export default HomePage;
