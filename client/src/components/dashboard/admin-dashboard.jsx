import React from "react";
import { useState,useEffect } from "react";
import { AuthState } from "../../context/AuthContext";
import Moment from "react-moment";
import { StackDivider, VStack,Stack, Text ,Button} from '@chakra-ui/react';
import axios from "axios";



const AdminDashboard = () => {
    const {user}=AuthState();
    const [forms,setForms]=useState([]);
    const getDash = async () => {
        
        
        //console.log(user)
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
          const { data } = await axios
            .get(`/api/admin/Dashboard`, config)
          //console.log(user)
          //console.log(data);
          setForms(data);
        } catch (error) {
          console.log(error);
        }
      };

    // const decline=async()=>{
    //     try {
    //         const sender=
    //         const config = {
    //           headers: {
    //             Authorization: `Bearer ${user.token}`,
    //           },
    //         };
    //         const { data } = await axios
    //           .post(`/api/admin/Dashboard/form-decline`, {},config)
           
    //         setDta(data);
    //       } 

    // }
    
      useEffect(() =>{
        
    
        getDash();
        
       },[getDash])
    return (
        <VStack divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'>
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
          <Stack direction="row" bg="#fff" alignItems="center" spacing={4}>
            <Text fontWeight="semibold">
              {" "}
              <Moment format="YYYY/MM/DD">{form.createdAt}</Moment>
            </Text>
            <Text fontWeight="semibold">
              {" "}
              STUDENT ID: {form.id}
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
            <Button colorScheme='teal' variant='solid'>
             Decline
            </Button>
            <Button colorScheme='teal' variant='outline'>
             Accept
            </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </VStack>
  );
    
}

export default AdminDashboard;