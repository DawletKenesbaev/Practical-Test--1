import {useState  } from 'react'

import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignUp from './auth/signup'
import SignIn from './auth/signin'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import BookList from '../components/templates/bookList';

function Views() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={ <SignIn />} />
          <Route path="/" element={<Navbar setSearchTerm={setSearchTerm} />} />
          <Route path="/signup" element={<Header />} />
          <Route path="/signup" element={<BookList searchTerm={searchTerm} />} />
        </Routes>
      </Router>
     
    </div>
  )
}

export default Views




{/* <Navbar   />
<Header /> 
<BookList  />
<SignIn />
<SignUp /> */}
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