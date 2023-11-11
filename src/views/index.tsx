import React from 'react'
import SignUp from './auth/signup'
import SignIn from './auth/signin'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import Data from './data';

function Views() {
  return (
    <div>
      {/* <Navbar />
      <Header /> */}
      <Data />
    </div>
  )
}

export default Views
