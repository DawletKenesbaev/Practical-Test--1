import {useState  } from 'react'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import BookList from '../components/templates/bookList';

function Views() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <Header />
      <BookList searchTerm={searchTerm} />
    </div>
  )
}

export default Views


