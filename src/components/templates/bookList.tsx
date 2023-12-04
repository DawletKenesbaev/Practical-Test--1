import  { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { Row, Col ,Pagination } from 'antd';
import styled from 'styled-components';

const URL = 'https://0001.uz';
const BOOKS_PER_PAGE = 9;

interface Book {
  title: string;
  author: string;
  published: number;
  pages: string;
  cover: string;
  summary: string;

}

interface BookCardProps {
  book: Book;
}
interface BookListProps {
  searchTerm: string;
}
function BookCard({ book }: BookCardProps) {
    return (
      <Col  sm={24} md={12} lg={8} xl={8} >
            <Card>
              <h2>{book.title.split(/\s+/).slice(0, 10).join(' ') }</h2>
              <p>{book.summary ? book.summary.split(/\s+/).slice(0, 40).join(' ') :" Lorem ipsum Lorem ipsectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, accusantium quod vitae voluptate cum corrupti beatae deleniti quam nobis nisi!"}</p>
              <img src={book.cover}  alt='book.title'/>
              <h3>{book.author}   {book.published}</h3>
              {book.pages ? <span>{book.pages} pages</span> : <h3></h3>}
            </Card>   
      </Col>
    );
  }


  function BookList({ searchTerm }: BookListProps) {    
    const [books, setBooks] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    useEffect(() => {
      async function fetchAllBooks() {
        const url =`${URL}/books/all`;
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Key: 'Pett',
              Sign: 'e9de95ede455c93507c8cd7e2aee6cae'
            },
          });
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          const data = await response.json();
          setBooks(data.data)
        } catch (error) {
          console.error("Error fetching all books:", error);
        }
      }
      fetchAllBooks();
    },[]); 
      useEffect(() => {
        async function searchBooks() {
          if (searchTerm.trim() === '') {
            return;
          }
          const method = 'GET';
          const apiUrl = `/books/${searchTerm}`;
          const userSecret = 'Catt';
          const sign = CryptoJS.MD5(`${method.toUpperCase()}${apiUrl}${userSecret}`).toString();
          const url = `${URL}/books/${searchTerm}`;
          try { 
            const response = await fetch(url, {
              method:'GET',
              headers: {
                Key: 'Pett',
                Sign: sign,
              },
            });
    
            if (!response.ok) {
              throw new Error(`Request failed with status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Searched books:', data);
            setFilteredBooks(data.data);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        }
    
        searchBooks();
      }, [searchTerm]);
      const totalBooks = searchTerm ? filteredBooks.length : books.length;
      const totalPages = Math.ceil(totalBooks / BOOKS_PER_PAGE);
    
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
    const data = searchTerm?filteredBooks:books;
    const renderBooks = () => {
      const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
      const endIndex = startIndex + BOOKS_PER_PAGE;
      return data.slice(startIndex, endIndex).map((book, index) => <BookCard key={index} book={book} />);
    };
    return (
      <div>
      <Row>{totalBooks > 0 ? renderBooks() :
        <LoaderContainer>
          <div className="loader"></div>
            <p>Wait some minute .Server working slow. Loading...</p>
        </LoaderContainer>
      }</Row>
      {totalBooks > BOOKS_PER_PAGE && (
        <PaginationContainer>
          <Pagination current={currentPage} total={totalBooks} pageSize={BOOKS_PER_PAGE} onChange={handlePageChange} />
        </PaginationContainer>
      )}
    </div>
    );
  }
  
  
const Card = styled.div`
    max-width: 390.33px;
    min-height: 319px;
    padding: 32px;
    border-radius: 12px;
    border: 1px;
    gap: 16px;
    background: white;
    border-color:#EBEBEB;
    margin:30px;
    font-family: Montserrat;
    color: black;
    h2 {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
    }
    p {
        font-family: Mulish;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: left;
        margin:20px 0;
    }
    h3 {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
        margin-top:15px;
    }
    span {
        display: inline-block;
        margin-left: 10px;
        padding:3px 7px;
        border-radius:9px;
        background: green;
        margin-right:auto;
    }
    img {
      widht:250px;
      height:300px;
      object-fit:cover;
      display:block;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
    }
`
const LoaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
 
}
p {
  font-size: 16px;
  color: white;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;  
export default BookList;

