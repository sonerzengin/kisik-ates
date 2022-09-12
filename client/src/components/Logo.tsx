import { Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png';

function Logo() {
  return (
    <div>
      <Image src={logo} alt='logo' className="logo"  />
    </div>
  )
}

export default Logo
