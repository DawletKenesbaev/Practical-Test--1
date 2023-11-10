import React from 'react'
import * as CryptoJS from 'crypto-js';

function Data() {
//     const apiUrl = 'http://localhost:3006/books';
// const headers = {
//   'Key': 'MyUserKey', // Replace with your actual key
//   'Sign': '2892678138d8d793a28fc49055095d8b', // Replace with your actual sign
// };

// fetch(apiUrl, {
//   method: 'GET',
//   headers: headers,
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Handle the data as needed
//   })
//   .catch(error => console.error('Error:', error));
// Assuming you have a function to generate the authorization headers
const getHeaders = () => {
  const key = "Mason"; // Replace with your actual key
  const secret = "MySecret"; // Replace with your actual secret

  const signString = `GET/books${secret}`;
  const sign = CryptoJS.MD5(signString).toString();

  return {
    Key: key,
    Sign: sign,
  };
};

// Function to fetch all books
const fetchBooks = async () => {
  try {
    const url = "http://localhost:3006/books";
    const headers = getHeaders();

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Example usage
fetchBooks()
  .then((data) => {
    console.log("Fetched data:", data);
    // Handle the fetched data here
  })
  .catch((error) => {
    console.error("Error:", error);
    // Handle errors here
  });

    
  return (
    <div>
      
    </div>
  )
}

export default Data
