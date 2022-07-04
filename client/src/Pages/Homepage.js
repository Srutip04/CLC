import { StylesProvider } from '@chakra-ui/react'
import React from 'react'

import Login from '../Components/authentification/Login'
import './styles.css'



const Homepage = () => {
  
  return (
    <div className='Home'>
    <Login/>

    </div>
  )
}

export default Homepage