import React, {useState} from 'react'
import SignUp from './auth/signup'
import SignIn from './auth/signin'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import BookList from '../components/templates/bookList';

function Views() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div>
       {/* <Navbar  setSearchTerm={setSearchTerm} />
       <Header /> 
       <BookList  searchTerm={searchTerm}/> */}
       <SignIn />
       <SignUp />
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