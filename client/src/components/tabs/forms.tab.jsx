import React, { useState, useEffect } from "react";
import { Stack, Text, Button } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';

import { AuthState } from "../../context/AuthContext";
import axios from "axios";
const Formtab = () => {
  const { user } = AuthState();
  const [forms, setForms] = useState([]);

  const getForms = async () => {
    const sender = user.id;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios
        .get(`http://localhost:5000/api/student/Dashboard`, config)
      
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
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text fontWeight="semibold">{form.date}</Text>
            <FcLock />
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
             {form.content}
            </Text>
            <Stack direction={{ base: "column", md: "row" }}>
              {/* <Button variant="outline" colorScheme="green">
                Cookie Preferences
              </Button>
              <Button colorScheme="green">OK</Button> */}
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Formtab;
