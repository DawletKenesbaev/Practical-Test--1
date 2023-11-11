
// import { useState } from "react";
// import React from "react";
// function Data() {
//   const [data,setData] = useState([])
// //b453eddf717cdcbb414b03549f7f130b

//   const getHeaders = () => {
//     const key = "20042004"; // Replace with your actual key
//     const secret = "generalhux"; // Replace with your actual secret
  
//     const signString = `GET/books${JSON.stringify({ key, secret })}`;
//     const sign = CryptoJS.MD5(signString).toString();
  
//     return {
//       Key: key,
//       Sign: sign,
//     };
//   };
  
  
 
//   const fetchBooks = async () => {
//     try {
//       const url = "https://0001.uz/books";
//       const headers = getHeaders();
  
//       const response = await fetch(url, {
//         method: "GET",
//         headers: headers,
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log("Data:", data); // Log the data
//       setData(data);
//       return data;
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       throw error;
//     }
//   };
  
//   return (
//     <div>ddddddd
//     </div>
//   )
// }

// export default Data
import axios from 'axios';
import * as CryptoJS from 'crypto-js';

// Replace these values with your actual Key and Sign
const userKey: string = "20042004";
//const sign: string = "08712d03fc6d1f60a83fe95732706165";
//const sign: string = "b453eddf717cdcbb414b03549f7f130b";


//once worked const sign: string = "c06810df5ceb6a73288643ee4efc1c8f";

const sign: string = "c06810df5ceb6a73288643ee4efc1c8f";




// Replace this URL with your actual endpoint
// once worked const url: string = " https://0001.uz/books";
const url: string = "http://localhost:3006/books";
// Replace this with your request body if needed
const requestBody = {"isbn": "9781118464465"};

// Construct the string to sign
const stringToSign: string = `POST/books${JSON.stringify(requestBody)}generalhux`;

console.log("String to Sign:", stringToSign);

// Calculate the MD5 hash using crypto-js
const calculatedSign: string = CryptoJS.MD5(stringToSign).toString();

console.log("Calculated Sign:", calculatedSign);

// Check if the calculated sign matches the provided sign
if (calculatedSign !== sign) {
    console.log("Sign verification failed.");
} else {
    // Make the request with the Key and Sign headers
    const headers = {
        "Key": userKey,
        "Sign": sign
    };

    axios.post(url, requestBody, { headers })
        .then(response => {
            // Print the response
            console.log(response.data);
        })
        .catch(error => {
            console.error(error.message);
        });
}

function Data() {

  return (
    <div>
      
    </div>
  )
}

export default Data

