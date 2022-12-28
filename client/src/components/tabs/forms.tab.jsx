/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { StackDivider, VStack, Stack, Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

//import { AuthState } from "../../context/AuthContext";
import axios from "axios";
const Formtab = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [forms, setForms] = useState([]);

  const getForms = async (fields) => {
    //console.log(user)
    const sender = user._id;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `https://clcbackend-production.up.railway.app/api/student/Dashboard?${sender}`,
        config
      );

      setForms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForms();
  }, [getForms]);
  // var i =0;
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
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
