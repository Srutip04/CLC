import React ,{useState}from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,useToast
} from "@chakra-ui/react";
import axios from "axios";
import { AuthState } from "../../context/AuthContext";

const ApplicationForm = () =>{

    const[id,setId] = useState();
    const[branch,setBranch] = useState();
    const[content,setContent] = useState();
    const [Loading, setLoading] = useState();
    const [date,setDate]=useState();
    const {user}=AuthState()


    const toast = useToast();



    const submitHandler = async() =>{
      if(!id || !branch || !content){
        toast({
          title: "Please Fill all the Fields",
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
      const email=user.email

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.post(
          "http://localhost:5000/api/student/Dashboard",
          {
            email,
            id,
            date,
            branch,
            content,
          },
          config
        );
        console.log(data);
        
        toast({
          title: "Application Submitted",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
  

    }
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Application Form
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="id" isRequired>
                <FormLabel>ID</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl id="branch" isRequired>
                <FormLabel>Branch</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="content" isRequired>
                <FormLabel>Message</FormLabel>

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  resize="none"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={submitHandler}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}

export default ApplicationForm;
