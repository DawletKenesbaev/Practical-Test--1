import  { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const URL = 'https://0001.uz'
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
  fetch: boolean;
}
function BookCard({ book }: BookCardProps) {
    return (
      <Col  sm={24} md={12} lg={8} xl={8} >
            <Card>
              <h2>{book.title.split(/\s+/).slice(0, 15).join(' ') }</h2>
              <p>{book.summary ? book.summary.split(/\s+/).slice(0, 50).join(' ') :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet,    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, accusantium quod vitae voluptate cum corrupti beatae deleniti quam nobis nisi!"}</p>
              <img src={book.cover}  alt='book.title'/>
              <h3>{book.author}   {book.published}</h3>
              <span>{book.pages} pages</span>
            </Card>   
      </Col>
    );
  }


  function BookList({ searchTerm }: BookListProps) {    
    const [books, setBooks] = useState<Book[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    useEffect(() => {
      async function fetchAllBooks() {
        const url =`${URL}/books/all`;
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Key: 'Pet',
              Sign: '6c6e7255963bc90f1823b3260559ae64'
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
        const requestBody = { "isbn": "9781118464465" };
        const sign = CryptoJS.MD5(`${method.toUpperCase()}${apiUrl}${userSecret}`).toString();
        console.log(sign);
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
  
    return (
      <Row>
        {
          searchTerm?
          filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          )):(books.length > 0 ? (
            books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))
          ) : (
            <p>Loading</p>
          ))

        }
      
        {/* {
          filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        } */}
      </Row>
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

export default BookList;



  // Store data in localStorage
