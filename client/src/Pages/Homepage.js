import { Container} from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'

import Login from '../Components/authentification/Login'




const Homepage = () => {
  
  return (
    <Container className='Home'>
      
      <Box >
      <Login/>

      </Box>
    </Container>
    
  )
}

export default Homepage