
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
  Link,Select, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SimpleCard from "../sign-in-form/sign-in-from";
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'



export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState()
  const [lastname, setlastname] = useState()
  const [password, setpassword] = useState()
  const [Loading, setLoading] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [role, setrole] = useState()
  const [email, setemail] = useState()
  const toast = useToast();
  const navigate=useNavigate();
  
  
  const submithandle=async()=>{
   
    setLoading(true)
    if (!firstname || !lastname || !email || !password || !role || !confirmpassword) {
      toast({
        title: "Please Fill all the Fields",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setTimeout(setLoading(false),4000) //set loading to false after 4 seconds
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password does not match",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setTimeout(setLoading(false),4000) //set loading to false after 4 seconds
      return;
    }
    console.log(firstname+role)
    try {
      setLoading(true)
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post("/api/register",
        {
          firstname,
          lastname,
          email,
          password,
          role,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false)
      
      localStorage.setItem("userInfo", JSON.stringify(data));
    
      if(role==='Teacher'){
        navigate('/admin')
      }else if(role==='Student'){
        navigate('/student')
      };
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
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setfirstname(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setlastname(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="designation" isRequired>
              <FormLabel>Designation</FormLabel>
              <Select
                placeholder="Select option"
                onChange={(e) => {
                  setrole(e.target.value);
                }}
              >
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </Select>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setconfirmpassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isLoading={Loading}
                onClick={submithandle}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link
                  color={"blue.400"}
                  onClick={() => {try{

                    navigate("/login");
                    console.log('yipee')
                  }catch(err){
                    console.log(err)
                  }
                  }}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}