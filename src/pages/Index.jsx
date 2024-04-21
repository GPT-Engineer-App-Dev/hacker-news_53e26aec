// Hacker News Clone using Chakra UI and React Icons
import { Box, Container, Heading, Text, VStack, Link, Divider, Icon, Button } from "@chakra-ui/react";
import { FaHackerNews, FaExternalLinkAlt } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "React 18 Released - What's New?",
    url: "https://reactjs.org",
    points: 156,
    author: "reactlover",
    time: "3 hours ago",
    comments: 42,
  },
  {
    id: 2,
    title: "Understanding the Event Loop in Node.js",
    url: "https://nodejs.org",
    points: 99,
    author: "nodefan",
    time: "1 day ago",
    comments: 18,
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: Which one should you choose?",
    url: "https://css-tricks.com",
    points: 207,
    author: "cssmaster",
    time: "5 hours ago",
    comments: 37,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl" display="flex" alignItems="center">
            <Icon as={FaHackerNews} mr={2} w={6} h={6} />
            Hacker News Clone
          </Heading>
        </Box>
        {newsItems.map((item) => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="lg">{item.title}</Heading>
            <Link href={item.url} isExternal color="blue.500">
              <Icon as={FaExternalLinkAlt} mx="2px" />
              Visit
            </Link>
            <Text mt={2}>
              {item.points} points by {item.author} {item.time} | {item.comments} comments
            </Text>
          </Box>
        ))}
        <Divider />
        <Button colorScheme="orange" variant="solid">
          Load More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
