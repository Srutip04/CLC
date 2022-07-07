import { Container} from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'


import AdminCard from '../components/sign-in-form/sign-in-admin'



const Homepage3 = () => {
  
  return (
    <Container className='Home'>
      
      <Box >
      <AdminCard/>
      </Box>
    </Container>
    
  )
}

export default Homepage3