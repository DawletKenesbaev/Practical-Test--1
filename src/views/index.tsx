import {useState  } from 'react'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import BookList from '../components/templates/bookList';
import CreateBook from '../components/templates/Post';

function Views() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [fetch,setFetch] = useState<boolean>(true)
  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} searchTerm = {searchTerm}/>
      <Header setFetch={setFetch} fetch={fetch}/>
      {/* <CreateBook /> */}
      <BookList searchTerm={searchTerm} fetch={fetch}/>
    </div>
  )
}

export default Views


