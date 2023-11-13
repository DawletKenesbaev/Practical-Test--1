import  { useState, useEffect } from 'react';


import { Row, Col } from 'antd';

import styled from 'styled-components';
interface Book {
  title: string;
  author_last_names: string;
  copyright: number;
  page_count?: number;
  price?: string;
  summary: string;

}

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
    return (
      <Col  sm={24} md={12} lg={8} xl={8}>
         <Card>
           <h2>{book.title}</h2>
           <p>{book.summary ? book.summary.split(/\s+/).slice(0, 50).join(' ') :"     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet,    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, accusantium quod vitae voluptate cum corrupti beatae deleniti quam nobis nisi!"}</p>
           <h3>{book.author_last_names}   {book.copyright}</h3>
           <span>{book.page_count} pages</span>
          </Card> 
      </Col>
    );
  }
  

  function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=10&page=1';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '5b1939ce94mshb49f52bb7690bbbp191ef1jsn509ca8e8e8cc',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
          }
        //reserve API KEY: '',

        };
  
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          setBooks(data.results);
          console.log(data.results);
        } catch (error) {
          console.error(error);
        }
      };
  
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  
      const fetchWithDelay = async () => {
        await delay(6500);
        fetchData();
      };
  
      fetchWithDelay();
    }, []);
    const filteredBooks = searchTerm
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : books;
    return (
      <Row>
        {filteredBooks && filteredBooks.length > 0 ? (
          books.map((book, index) => <BookCard key={index} book={book} />)
        ) : (
          <p>No books available</p>
        )}
      </Row>
    );
  }
  
const Card = styled.div`
    max-width: 390.33px;
    min-height: 209px;
    padding: 32px;
    border-radius: 12px;
    border: 1px;
    gap: 16px;
    background: #d6a5a5;
    margin:30px;
    font-family: Montserrat;

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
`

export default BookList;
