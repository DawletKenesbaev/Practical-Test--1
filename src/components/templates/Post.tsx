import CryptoJS from 'crypto-js';

interface Book {
  isbn: string;
  // other book properties...
}

interface RequestOptions {
  method: string;
  url: string;
  book: Book;
  userSecret: string;
}

function generateSign({ method, url, book, userSecret }: RequestOptions): string {
  const requestBody = JSON.stringify({ isbn: book.isbn });
  const sign = CryptoJS.MD5(`${method.toUpperCase()}+${url}+${requestBody}+${userSecret}`).toString();
  return sign;
}

// Example usage:
const method = 'POST';
const apiUrl = '/books';
const userKey = 'MyUserKey';
const userSecret = 'MyUserSecret';

// Creating the first book
const book1: Book = { isbn: '9781118464463' };
const sign1 = generateSign({ method, url: apiUrl, book: book1, userSecret });
console.log('Sign for book1:', sign1);

// Creating another book with a different isbn
const book2: Book = { isbn: '9781118464465' };
const sign2 = generateSign({ method, url: apiUrl, book: book2, userSecret });
console.log('Sign for book2:', sign2);
