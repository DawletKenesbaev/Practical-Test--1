
// import CryptoJS from 'crypto-js';

// function Test() {

// const method: string = 'POST';
// const url: string = '/books';
// const body = {"isbn":"9781118464465"};
// const userSecret: string = 'Catt';

// const stringToSign: string = `${method}+${url}+${body}+${userSecret}`;
// const signValue: string = CryptoJS.MD5('POST/books{isbn:"9781118464465"}Catt').toString();

// console.log(signValue);


//      return <div>ddd</div>
// }
// export default Test
   // const CryptoJS = require('crypto-js');
    import CryptoJS from 'crypto-js';
function Sign(params) {

    console.log("Running outside of Postman.");
    
    const request = {
        method: 'POST',
        url: {
            getPath: () => '/books',
            getPathWithQuery: () => '/books',
        },
        body: '{"isbn":"9781118464462"}',
    };
    
    // Mocking collection variables
    const collectionVariables = {
        get: (key) => 'Catt',
        set: (key, value) => console.log(`Setting ${key} to ${value}`),
    };
    
    console.log(request.url.getPath());
    
    if (request.url.getPath() === "/signup") {
        // Process signup request
        const body = JSON.parse(request.body);
        console.log("Updated key and secret:", body.key, body.secret);
    } else {
        // Process other requests
        const signstr = request.method +
            request.url.getPathWithQuery() +
            request.body +
            collectionVariables.get("secret");
        const sign = CryptoJS.MD5(signstr).toString();
        console.log("signstr:", signstr);
        console.log("sign:", sign);
        const handleCreateBook = async () => {
            const requestData = {
              isbn: "9781118464462",
            };
            try {
        
              const response = await fetch("https://0001.uz/books", {
                method: "POST",
                headers: {
                  Key: "Pett", 
                  Sign: sign , 
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
              });
          
              if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
              }
            } catch (error) {
              console.error("Error creating new book:", error);
            }
          };
    }
   
    return <div>Sign</div>
}
export default Sign