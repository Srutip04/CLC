import { Container} from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'
import SignupCard from '../components/sign-up-form/sign-up-from';
import '../App.css';
import SimpleCard from '../components/sign-in-form/sign-in-from';



const Homepage = () => {
  
  return (
    <Container className='Home'>
      
      <Box >
        <SignupCard/>
      </Box>
    </Container>
    
  )
}

export default Homepage