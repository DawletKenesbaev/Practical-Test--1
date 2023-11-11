// import axios from 'axios';
// import * as CryptoJS from 'crypto-js';


// import React from 'react'

// function Data() {
//     const userKey: string = "20042004";
// const url: string = "https://0001.uz/books";
// const requestBody = { "isbn": "9781118464460" };

// // Calculate the 'Sign' value
// const stringToSign: string = `POST/books${JSON.stringify(requestBody)}generalhux`;
// const sign: string = CryptoJS.MD5(stringToSign).toString();

// // Set up headers
// const headers = {
//     "Key": userKey,
//     "Sign": sign
// };
//     axios.post(url, requestBody, { headers })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         if (error.response) {
//             const responseData = error.response.data;

//             // Check if the error is due to a duplicate ISBN
//             if (responseData.message === "Book with this ISBN already exists") {
//                 console.error("Error: Book with this ISBN already exists");
//             } else {
//                 // Handle other types of errors
//                 console.error("Error response data:", responseData);
//             }
//         } else if (error.request) {
//             // The request was made but no response was received
//             console.error("No response received:", error.request);
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.error("Request setup error:", error.message);
//         }
//     });
//   return (
//     <div>
//       njjjjj
//     </div>
//   )
// }

// export default Data

// import React, { useEffect,useState } from 'react';

// function Data() {
//     const [books,setBooks] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '5b1939ce94mshb49f52bb7690bbbp191ef1jsn509ca8e8e8cc',
//           'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
//         }
//       };   
//       try {
//         const response = await fetch(url, options);
//         const result : any = await response.text();
//         console.log(result);
//         setBooks(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []); 

//   return (
//     <div>
//       {/* Your component JSX */}
//     </div>
//   );
// }

// export default Data;
