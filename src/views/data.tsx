// import axios from 'axios';
// import * as CryptoJS from 'crypto-js';

// // const userKey = "20042004";
// const userKey = "kenesbaevdawlet";
// // const sign = "c06810df5ceb6a73288643ee4efc1c8f";
// const sign = "4a56f05a79b7e94d5e1a3e6b5c1da600";

// const url = "https://0001.uz/books";
// const requestBody = {"isbn": "9781118464465"};

// const stringToSign = `POST/books${JSON.stringify(requestBody)}falcon-16`;
// const calculatedSign = CryptoJS.MD5(stringToSign).toString();

// console.log("String to Sign:", stringToSign);
// console.log("Calculated Sign:", calculatedSign);

// if (calculatedSign !== sign) {
//     console.log("Sign verification failed.");
// } else {
//     const headers = {
//         "Key": userKey,
//         "Sign": sign
//     };

//     axios.post(url, requestBody, { headers })
//         .then(response => {
//             console.log("Response:", response.data);
//         })
//         .catch(error => {
//             console.error("Error:", error.message);
//         });
// }

// function Data() {
//   return (
//     <div></div>
//   )
// }

// export default Data;


// import { useState } from "react";
// import React from "react";
// function Data() {
//   const [data,setData] = useState([])
// //b453eddf717cdcbb414b03549f7f130b

//   const getHeaders = () => {
//     const key = "20042004"; // Replace with your actual key
//     const secret = "generalhux"; // Replace with your actual secret
  
//     const signString = GET/books${JSON.stringify({ key, secret })};
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
//         throw new Error(HTTP error! Status: ${response.status});
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
const userKey: string = "20042004";
const sign: string = "c06810df5ceb6a73288643ee4efc1c8f";
const url: string = " https://0001.uz/books";
const requestBody = {"isbn": "9781118464465"};
const stringToSign: string = `POST/books${JSON.stringify(requestBody)}generalhux`;

console.log("String to Sign:", stringToSign);

const calculatedSign: string = CryptoJS.MD5(stringToSign).toString();

console.log("Calculated Sign:", calculatedSign);

if (calculatedSign !== sign) {
    console.log("Sign verification failed.");
} else {
    const headers = {
        "Key": userKey,
        "Sign": sign
    };

    axios.post(url, requestBody, { headers })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error.message);
        });
}

function Data() {

  return (
    <div>
      Finally getting some data
    </div>
  )
}

export default Data