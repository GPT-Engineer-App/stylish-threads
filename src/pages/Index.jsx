// Complete the Index page component for an online clothing store
import { Box, Flex, Grid, Heading, Image, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Casual Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaGlydHxlbnwwfHx8fDE3MTM4MTMyODV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Formal Suit",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBzdWl0fGVufDB8fHx8MTcxMzgxMzI4NXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Summer Dress",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBkcmVzc3xlbnwwfHx8fDE3MTM4MTMyODZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Jeans",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZWFuc3xlbnwwfHx8fDE3MTM4MTMyODZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={4}>Welcome to Our Online Clothing Store</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" backgroundColor="gray.50">
            <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
            <Box p="8">
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {product.name}
              </Text>
              <Text fontSize="xl" color="gray.800">
                {product.price}
              </Text>
              <Flex align="center" justify="space-between" mt={3}>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="sm">
                  Add to Cart
                </Button>
                <Button colorScheme="pink" variant="ghost" size="sm">
                  <FaHeart />
                </Button>
                <Button colorScheme="blue" variant="ghost" size="sm">
                  <FaSearch />
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
