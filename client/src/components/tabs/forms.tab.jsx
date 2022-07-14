import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Stack, Text } from '@chakra-ui/react';
import { Badge } from "@chakra-ui/react";

import { AuthState } from "../../context/AuthContext";
import axios from "axios";
const Formtab = () => {
  const { user } = AuthState();
  const [forms, setForms] = useState([]);
  
 

  const getForms = async () => {
    const sender = user._id;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios
        .get(`http://localhost:5000/api/student/Dashboard?sender=${sender}`, config)
      console.log(user)
      console.log(data);
      setForms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
     getForms();
   },[])

  return (
    <Stack>
      {" "}
      {forms.map((form) => (
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" key={user.id}>
          <Stack direction="row" alignItems="center">
            <Text fontWeight="semibold">
              {" "}
              <Moment format="YYYY/MM/DD">{form.createdAt}</Moment>
            </Text>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
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
    </Stack>
  );
};

export default Formtab;
