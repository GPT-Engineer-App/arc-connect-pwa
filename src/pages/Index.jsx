import { Box, FormControl, FormLabel, Input, Textarea, Button, Image, useToast, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const toast = useToast();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitProject = () => {
    if (!projectName || !projectDescription || !projectImage) {
      toast({
        title: 'Error',
        description: "Please fill all fields and upload an image.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log('Project Submitted:', { projectName, projectDescription, projectImage });
    setProjectName('');
    setProjectDescription('');
    setProjectImage('');
    toast({
      title: 'Success',
      description: "Project has been successfully uploaded.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" mb="8">Project Upload Page</Text>
      <Box p={4} mt={8} borderWidth="1px" borderRadius="lg">
        <FormControl>
          <FormLabel>Project Name</FormLabel>
          <Input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
          <FormLabel mt={4}>Project Description</FormLabel>
          <Textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
          <FormLabel mt={4}>Upload Image</FormLabel>
          <Input type="file" onChange={handleImageUpload} accept="image/*" />
          {projectImage && <Image src={projectImage} alt="Project Image" boxSize="300px" mt={4} />}
          <Button mt={4} colorScheme="blue" onClick={handleSubmitProject}>Submit Project</Button>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default Index;