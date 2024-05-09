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
    console.log('File Submitted for Analysis:', file);
    toast({
      title: 'Analysis in progress',
      description: "Your file is being analyzed. Please wait.",
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
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