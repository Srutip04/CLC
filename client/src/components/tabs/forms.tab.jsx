import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { VStack,Stack, Text } from '@chakra-ui/react';
import { Badge } from "@chakra-ui/react";

//import { AuthState } from "../../context/AuthContext";
import axios from "axios";
const Formtab = () => {
  const user=JSON.parse(localStorage.getItem("userInfo"))

  const [forms, setForms] = useState([]);
  
 

  const getForms = async () => {
    //console.log(user)
    const sender=user._id
    
   

    
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios
        .get(`/api/student/Dashboard?sender=${sender}`, config)
      //console.log(user)
      //console.log(data);
      setForms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    

    getForms();
    
   },[getForms])
  // var i =0;
  return (
    <VStack>
      {" "}
      {forms.map((form) => (
        <Stack
          p="4"
          bg="#fff"
          boxShadow="lg"
          m="4"
          borderRadius="sm"
          key={user.id}
        >
          <Stack direction="row" bg="#fff" alignItems="center">
            <Text fontWeight="semibold">
              {" "}
              <Moment format="YYYY/MM/DD">{form.createdAt}</Moment>
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            bg="#fff"
          >
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
              {form.content}
            </Text>
            <Stack direction={{ base: "column", md: "row" }}>
              <Badge variant="solid" colorScheme="green">
                Success
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </VStack>
  );
};

export default Formtab;
