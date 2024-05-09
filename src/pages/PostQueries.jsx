import { Box, FormControl, FormLabel, Input, Textarea, Button, VStack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const PostQueries = () => {
  const [queryTitle, setQueryTitle] = useState('');
  const [queryDescription, setQueryDescription] = useState('');
  const toast = useToast();

  const handleSubmitQuery = () => {
    if (!queryTitle || !queryDescription) {
      toast({
        title: 'Error',
        description: "Please fill all fields before submitting.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log('Query Submitted:', { queryTitle, queryDescription });
    setQueryTitle('');
    setQueryDescription('');
    toast({
      title: 'Success',
      description: "Your query has been posted.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" mb="8">Post Your Query</Text>
      <Box p={4} mt={8} borderWidth="1px" borderRadius="lg">
        <FormControl>
          <FormLabel>Query Title</FormLabel>
          <Input type="text" value={queryTitle} onChange={(e) => setQueryTitle(e.target.value)} />
          <FormLabel mt={4}>Query Description</FormLabel>
          <Textarea value={queryDescription} onChange={(e) => setQueryDescription(e.target.value)} />
          <Button mt={4} colorScheme="blue" onClick={handleSubmitQuery}>Submit Query</Button>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default PostQueries;