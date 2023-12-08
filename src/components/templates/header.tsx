
import styled from 'styled-components';
import React, { useState } from "react";
import CryptoJS from 'crypto-js';

interface Book {
  title: string;
  author: string;
  published: string;
  pages: string;
  summary: string;
  cover: string;
}

interface HeaderProps {
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
  fetch: boolean;
}

const initialValues = {
  title: '',
  author: '',
  published: '',
  pages: '',
  summary: '',
  cover: '',
};

function Header(props: HeaderProps) {
  const [isModal, setIsModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState<Book>(initialValues);

  const handleToggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModal(!isModal);
  };
  
  const handleShow = () => {
    setShowMessage(true);
    setIsModal(!isModal);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      await handleCreateBook(e); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleCreateBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleShow();
    props.setFetch(!props.fetch);
    const requestData ={
      "data": {
          "author": "Eben Upton",
          "cover": "https://covers.openlibrary.org/b/id/7605922-M.jpg",
          "id": 1,
          "isbn": "9781118464465",
          "pages": 0,
          "published": 2012,
          "title": "Raspberry Pi User Guide"
      },
      "isOk": true,
      "message": "ok"
  }
    try {
      const method = 'POST';
      const apiUrl = "/books";
      const userSecret = 'Catt';
      const requestBody = { "isbn": "9781118464465" };
      const sign = CryptoJS.MD5(`${method}${apiUrl}${requestBody}${userSecret}`).toString();
      const response = await fetch("https://0001.uz/books", {
        method: "POST",
        headers: {
          Key: "Pett", 
          Sign: 'f7d7273905545235092e03f801833fc3', 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("New book created:", data);
    } catch (error) {
      console.error("Error creating new book:", error);
    }
    console.log('New book data:', formData);
    setFormData(initialValues);
  };

  return (
    <Bar>
      <div className={isModal ? 'modalClose form' : 'modal form'}>
        <Form onSubmit={handleCreateBook}>
          {/* Your form input fields */}
          <Label htmlFor="title">Title</Label>
          <Input onChange={handleChange} value={formData.title} placeholder="Enter your title" type="text" id="title" name="title" />

          <Label htmlFor="author">Author</Label>
        <Input onChange={handleChange} value={formData.author}  placeholder='Enter your author' type="text" id="author" name="author" />
        <Label htmlFor="cover"> Summary</Label>
        <Input onChange={handleChange} value={formData.cover}  placeholder='Enter your cover' type="text" id="cover" name="cover" />
        <Label htmlFor="date">Published year </Label>
        <Input onChange={handleChange} value={formData.published}  placeholder='Enter your published date' type="text" id="date" name="date" />
        <Label htmlFor="pages"> Pages</Label>
        <Input onChange={handleChange} value={formData.pages}  placeholder='Enter your pages' type="text" id="pages" name="pages" />
          <button className="close" onClick={handleToggleModal}>
            Close
          </button>
          <button className="submit" type="submit">
            Submit
          </button>
        </Form>
      </div>
      <Container>  
        <Top>
           <div className='left'>
               <h1>You’ve got <span>7 book</span></h1>
               <h3>Your task today</h3>
           </div>
           <div className='right'>
              <button onClick={handleToggleModal}>+ Create a book</button>
           </div>
       </Top>
      </Container>       
    </Bar>
  );
}

const Container = styled.div`
  margin:0 auto;
  padding: 0 20px;
  max-width: 1240px;
`
const Top = styled.div`
    display: flex;
    position: relative;
    margin:50px 0 100px 0;
    h1 {
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0px;
        text-align: left;
    }
    h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;

    }
    .left {
       position: absolute;
       left: 0;
       span {
        color: #6200EE;
;
       }
    }
    .right {
        position: absolute;
        right: 0;
        input {
            width: 320px;
            height: 47px;
            padding: 14px 16px 14px 16px;
            border-radius: 6px;
            border: 1px;
            gap: 16px;
            font-size:19px;
            outline: none;
        }
        button {
            width: 181px;
            height: 40px;
            padding: 10px 24px 10px 24px;
            border-radius: 4px;
            font-size:17px;
            font-weight:500;
            margin-left: 5px;
            gap: 12px;
            color: #fefefe;
            background: #6200EE;
            cursor: pointer;
            transition: 0.6s;
            border: 2px solid transparent;

        }
        button:hover {
            background: white;
            color: #6200EE;
            border: 2px solid #6200EE;
            transform: scale(1.02);

        }
    }
`

//Bar
const Bar = styled.div`
  position: relative;
  .modal {
    display: none;
  }
  .modalClose {
    position:absolute;
    z-index: 4;
  }
  .form {
    height: 1000px;
    width: 100%;
    background: #11111124;
  }

`


//Modal
const Form = styled.form`
  margin-top:25px;
  align-items: flex-center;
  justify-content: start;
  text-align:left;
  width:430px;
  background: #fff;
  padding: 24px 28px;
  border-radius: 10px;
  .close {
    width: 181px;
    height: 40px;
    padding: 10px 24px 10px 24px;
    border-radius: 4px;
    font-size:17px;
    font-weight:500;
    margin-left: 5px;
    gap: 12px;
    cursor: pointer;
    transition: 0.6s;
    color: #fefefe;
    background: #ee9300;
    border: 2px solid transparent;

  }
  .close:hover {
    transform: scale(1.02);
    background: white;
    color: #ee9300;
    border: 2px solid #ee9300;

   }
  .submit {
    width: 181px;
    height: 40px;
    padding: 10px 24px 10px 24px;
    border-radius: 4px;
    font-size:17px;
    font-weight:500;
    margin-left: 5px;
    gap: 12px;
    color: #fefefe;
    background: #6200EE;
    cursor: pointer;
    transition: 0.6s;
    border: 2px solid transparent;
  }
  .submit:hover {
    background: white;
    color: #6200EE;
    border: 2px solid #6200EE;
    transform: scale(1.02);

   }
`;

const Label = styled.label`
  display: block;
    font-family: Mulish;
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0px;
    margin-bottom: 8px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #adabab;
    background: #e6e5e5;
    border-radius: 4px;
    margin-bottom: 29px;
    font-size:17px;
    width:100%;
    height: 47px;
    padding: 14px 16px 14px 16px;
    border-radius: 6px;
    border: 1px;
    gap: 16px;
    outline: none;

`;
//Done

const Done = styled.div`
  background: #52C41A;
  position: absolute;
  right: 40px;
  bottom: 50px;
  min-width: 180px;
  height: 45px;
  border-radius: 15px;
  padding: 7px;
  display: flex;
  .icon {
    color: white;
  }
  span {
    font-size:17px;
    color: white;
    margin-left:10px;
  }
    
`
export default Header;





































//be confident
