import {
  VStack,
  useColorModeValue,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";

export interface CardProps {
  title?: string;
  chain?: string;
  imageSlug?: string;
}
export default function Card({ title, chain, imageSlug }: CardProps) {
  return (
    <VStack
      px={5}
      align="center"
      borderWidth="5px"
      borderRadius="2xl"
      borderColor={useColorModeValue("brand.500", "brand.500")}
      direction={{ base: "row" }}
      bg={useColorModeValue("brand.50", "brand.900")}
      padding={1}
      textAlign="center"
      textOverflow="wrap"
    >
      <Image src={imageSlug} alt={title} boxSize="100%" rounded="xl" />
      <Heading
        fontSize={{
          base: "14px",
          sm: "16px",
        }}
        pt={2}
      >
        {title}
      </Heading>
      <Text
        fontSize={{
          base: "12px",
          sm: "14px",
        }}
        pb={2}
      >
        {chain}
      </Text>
    </VStack>
  );
}
