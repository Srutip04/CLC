import { Container} from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'


import SimpleCard from '../components/sign-in-form/sign-in-from';



const Homepage2 = () => {
  
  return (
    <Container className='Home'>
      
      <Box >
      <SimpleCard/>
      </Box>
    </Container>
    
  )
}

export default Homepage2