import React from 'react'
import SignUp from './auth/signup'
import SignIn from './auth/signin'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import BookList from '../components/templates/bookList';
function Views() {
  return (
    <div>
       <Navbar />
      <Header /> 
    </div>
  )
}

export default Views





// {
//   "data": {
//       "email": "hux@gmail.com",
//       "id": 8,
//       "key": "kenesbaevdawlet",
//       "name": "Hux",
//       "secret": "falcon-16"
//   },
//   "isOk": true,
//   "message": "ok"
// }