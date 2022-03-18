import { VStack, useColorModeValue, Heading, Text } from "@chakra-ui/react";

export interface VideoCardProps {
  title?: string;
  chain?: string;
  videoSlug?: string;
}
export default function VideoCard({ title, chain, videoSlug }: VideoCardProps) {
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
      <video loop autoPlay>
        <source src={videoSlug} />
      </video>
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
