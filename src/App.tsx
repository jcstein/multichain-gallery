import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  Container,
  Text,
  SimpleGrid,
  Code,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Card from "./components/Card";
import VideoCard from "./components/VideoCard";
import Fonts from "./Fonts";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Container p={5} maxW="9xl">
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="20vmin" pointerEvents="none" />
            <Heading fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "5xl" }}>
              Ankr Multichain API NFT Gallery
            </Heading>
            <Text>
              👋 gm, <Code fontSize="lg">joshcs.eth</Code>!
            </Text>
            <SimpleGrid
              minChildWidth="300px"
              spacing={{
                base: "15px",
                sm: "15px",
                md: "15px",
              }}
              p={3}
              alignItems="flex-start"
            >
              <Card
                title="BigBang # 77"
                chain="Ethereum"
                imageSlug="https://lh3.googleusercontent.com/j882X78SlIASN4m2Jf0ihZBgBVSIP949YKpl9N2YAuUHDr16GF0xmW69gU5WsyPM92z-YMJoIWW8d7nVoVYwGR0BV5zrXOBdHoVIpQ=w600"
              />
              <Card
                title="Crypto Tech Women"
                chain="Ethereum"
                imageSlug="https://ipfs.io/ipfs/QmPBoX919RxRmDf2gCAKzEyNh11YviZYBifXvuASCkDQCZ"
              />
              <Card
                title="Superkids #8"
                chain="Ethereum"
                imageSlug="https://ipfs.io/ipfs/QmVFxHrEy3eATWf2jysF6XggmuL4seHf63KU2NJHuEZFQ2/8.png"
              />
              <Card
                title="THC World Pass"
                chain="Polygon"
                imageSlug="https://www.thehighapesclub.com/assets/nft/worldpass/1.gif"
              />
              <Card
                title="Lucky Penny"
                chain="Polygon"
                imageSlug="https://lh3.googleusercontent.com/XH882RUZW1c2uyMwT0JvZ4WCADbD-uUMNCXyy_efBEWo7yfyKTMem3QQyEV7_Yh1nopQyX4QjJo17Qvokg04ybu1QEvY753ngk5B"
              />
              <Card
                title="Buildspace: Intro to Web3 | Cohort Ginan | #25"
                chain="Polygon"
                imageSlug="https://tokens.buildspace.so/assets/CH67c5a0d1-f07a-4d9f-85b1-cbc0a21bffb4-24/render.png"
              />
              <Card
                title="Buildspace: Build a Web3 App: Mint Your Own NFT collection | Cohort Deneb | #51"
                chain="Polygon"
                imageSlug="https://tokens.buildspace.so/assets/CH126cf5d5-cc99-4774-88cf-1258ef9abf5e-50/render.png"
              />
              <VideoCard
                chain="Polygon"
                videoSlug="https://tokens.buildspace.so/assets/CHf8164866-ea18-4057-9583-768a2036ca30-3/render.mp4"
                title="Buildspace: Create a NFT Game | Cohort Beid | #4"
              />
              <VideoCard
                chain="Polygon"
                videoSlug="https://tokens.buildspace.so/assets/CH9be40837-dd03-4a80-9757-74af0224d35e-28/render.mp4"
                title="Buildspace: Build a Solana App | Cohort Alkes | #29"
              />
              <VideoCard
                chain="Polygon"
                videoSlug="https://tokens.buildspace.so/assets/CH38412f17-fa73-49c7-b6e4-385c7d821b95-69/render.mp4"
                title="Buildspace: Solana NFT Collection | Cohort Alkes | #70"
              />
              <VideoCard
                chain="Polygon"
                videoSlug="https://tokens.buildspace.so/assets/CCWARRIOR01-215/render.mp4"
                title="buildspace warrior | top community contributor | #216"
              />
              <VideoCard
                videoSlug="https://tokens.buildspace.so/assets/CH4f447780-07cf-408a-8f4c-253a8b4e8bae-34/render.mp4"
                title="Buildspace: Build your own DAO with Javascript | Cohort Alkes | #35"
                chain="Polygon"
              />
              <Card
                title="thirdweb Lootbox Finisher"
                chain="Polygon"
                imageSlug="https://ipfs.thirdweb.com/ipfs/Qmabg2oq7iKKB9PtWMrpwS8b5x29jcckHkB5A3DujAZCHk/1.gif"
              />
              <Card
                title="Pixel Avatars"
                chain="Polygon"
                imageSlug="https://ipfs.thirdweb.com/ipfs/QmaZdyGNxdM2AB37PXp4bUjF3Mc5VR33r8pwMqmJF3P6be/dev_2504.png"
              />
              <Card
                title="Pyme Access Pass"
                chain="Polygon"
                imageSlug="https://pyme.mypinata.cloud/ipfs/QmRE5kb2AzUC8S58BkiKk9rDXPFFgmGtHp87aH5Q29vJoH"
              />
              <Card
                title="Atlantis World Seasons: Christmas"
                chain="Polygon"
                imageSlug="https://ipfs.io/ipfs/bafybeiderkcdx6yw3xvo6tppzuisizyqysstgbpmcfvedtoo7pt43mq6za"
              />
            </SimpleGrid>
          </VStack>
        </Grid>
      </Box>
    </Container>
  </ChakraProvider>
);
