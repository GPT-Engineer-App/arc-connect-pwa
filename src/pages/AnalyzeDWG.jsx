import { Box, FormControl, FormLabel, Input, Button, VStack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const AnalyzeDWG = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;
    if (uploadedFile.type !== 'application/pdf' && uploadedFile.type !== 'image/vnd.dwg') {
      toast({
        title: 'Invalid file type',
        description: "Please upload a PDF or DWG file.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setFile(uploadedFile);
  };

  const handleSubmit = () => {
    if (!file) {
      toast({
        title: 'No file selected',
        description: "Please select a file to analyze.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Simulate sending the file to a server for GPT-4 analysis
    try {
      console.log('File Submitted for GPT-4 Analysis:', file);
      // Simulated response from server after analysis
      setTimeout(() => {
        toast({
          title: 'Analysis Complete',
          description: "Insights from your file have been generated.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }, 3000);
    } catch (error) {
      toast({
        title: 'Analysis Failed',
        description: "There was an error processing your file.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    // Here you would typically handle the file upload to a server for analysis
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" mb="8">Analyze DWG and PDF Files</Text>
      <Box p={4} mt={8} borderWidth="1px" borderRadius="lg">
        <FormControl>
          <FormLabel>Upload DWG or PDF File</FormLabel>
          <Input type="file" onChange={handleFileChange} accept=".dwg,.pdf" />
          <Button mt={4} colorScheme="blue" onClick={handleSubmit}>Analyze File</Button>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default AnalyzeDWG;