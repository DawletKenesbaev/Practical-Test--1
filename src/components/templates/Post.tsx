import { useState } from 'react';
import CryptoJS from 'crypto-js';
const CreateBook = () => {
//   const [newBook, setNewBook] = useState({
//     isbn: '9780000000000', // Replace with the actual ISBN of the new book
//     title: 'New Book Title', // Replace with the actual title of the new book
//     // Add other properties of the new book as needed
//   });
 
  
function generateSign(method: string, url: string, body: string, secret: string): string {
    const signString = `${method}${url}${body}${secret}`;
    const sign = CryptoJS.MD5(signString).toString();
    return sign;
}

const method = 'POST';
const url = '/books';
const body = '{"isbn":"9781118464465"}';
const userSecret = 'Dawlet';
const generatedSign = generateSign(method, url, body, userSecret);
console.log(generatedSign);
const createNewBook = async () => {
    const URL = 'https://0001.uz/books';
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Key: 'MyName',
          Sign: generatedSign,
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('New book created:', data);

      // Optionally, you can update your component state or take other actions
    } catch (error) {
      console.error('Error creating new book:', error);
    }
  };
  return (
    <div>
      <h1>Create a New Book</h1>
      <button onClick={createNewBook}>Create Book</button>
    </div>
  );
};

export default CreateBook;
