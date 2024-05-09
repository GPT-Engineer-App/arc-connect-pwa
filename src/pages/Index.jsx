import { Container, VStack, Text, Button, Input, Image, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [inputText, setInputText] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const toast = useToast();

  const handleGenerateImage = async () => {
    if (!inputText) {
      toast({
        title: 'Error',
        description: "Please enter a description for the image.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulated API call to DALL-E
    setImageSrc(`https://api.dalle.example.com/generate?text=${encodeURIComponent(inputText)}`);
    setInputText('');
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb="8">Inspiration Page</Text>
        <Input
          placeholder="Describe your dream architecture..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          size="md"
          width="80%"
        />
        <Button colorScheme="blue" onClick={handleGenerateImage}>Generate Image</Button>
        {imageSrc && <Image src={imageSrc} alt="Generated Architecture" boxSize="300px" mt="4" />}
      </VStack>
    </Container>
  );
};

export default Index;