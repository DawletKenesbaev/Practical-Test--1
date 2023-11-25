import React, {useState} from 'react'
import styled from 'styled-components'
import Googleicon from '../../assets/images/social-logos.svg';
import Facebookicon from '../../assets/images/Facebook.png'
import { useNavigate } from 'react-router-dom';


import { UserAuth } from '../../contexts/AuthContext.jsx';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();
  
  const { createUser } = UserAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/')

    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        console.log(e.message);
      } 
    }
  };
  return (
    <OuterBox>
       <Divv>
         <h1 className='Divv-title'>Sign Up</h1>
         <button className='Divv-con'>
            <img className='Divv-img' src={Googleicon} alt='google'/>
            <h2>Continue with Google</h2>
        </button>
         <button className='Divv-con'>
            <img className='Divv-img' src={Facebookicon} alt='facebook'/>
            <h2>Continue with Facebook</h2>
        </button>
        <div className='span-box'>
            <span className='span-line'></span>
            <span className='span'>OR</span>
            <span className='span-line'></span>
        </div>
        <Form onSubmit={handleSubmit}>
            {/* <Label htmlFor="name">Your name</Label>
            <Input placeholder='Dawlet King' type="text" id="name" name="name" /> */}
            <Label htmlFor="email">Your email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' type="email" id="email" name="email" />
            {/* <Label htmlFor="username">Your username</Label>
            <Input placeholder='Enter your username' type="text" id="username" name="username" /> */}
            <Label htmlFor="password" >Your password</Label>
            <Input placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <Button type='submit'>Sign Up</Button>
        </Form>   
        <PageLink>
            <h3>Already Sign Up?</h3>
            <a href='#'>Go to Sign in</a>
            
        </PageLink>  
       </Divv>
    </OuterBox>
  )
}
const OuterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Divv = styled.div`
    width: 430px;
    height: 695px;
    text-align: center;
    background: #FEFEFE;
    border-radius: 10px;
    padding:0 18px;
    .Divv-title {
        font-family: Mulish;
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 0em;
        margin: 27px 15px 30px 15px;

    }
    .Divv-con {
        display: flex;  
        align-items: center;
        width: 100%;
        height: 44px;
        padding: 3px 54px;
        border-radius: 4px;
        border: 1px;
        gap: 16px;
        margin-top:10px; 
        transition :0.6s ;
        cursor: pointer;
        h2 {
        font-family: Mulish;
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0px;
        text-align:left;
        width: 230px;
        margin-right:10px;
    }         
    }
    .Divv-con:hover {
        transform:scale(1.01);
    }
    
    .Divv-img {
        width: 24px;
        height: 24px;
        display: inline-block;
        margin-left:40px;
    
    }
    .span-box {
        display: flex;
        align-items: center;
        font-size:14px;
    }
    .span-line {
        display: block;
        height: 1px;
        width: 140px;
        background: #000;
        margin:26px 0 ;

    }
`
const Form = styled.form`
  margin-top:25px;
  align-items: flex-center;
  justify-content: start;
  text-align:left;
  Button:hover {
        background: transparent;
        border: 2px solid #6200EE;
        color:#6200EE ;

    }

`;

const Label = styled.label`
  display: block;
  font-family: Mulish;
    font-size: 16px;
    font-weight: 500;
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
    width:100%;
    height: 47px;
    padding: 14px 16px 14px 16px;
    border-radius: 6px;
    border: 1px;
    gap: 16px;

`;
const Button = styled.button`
    width: 374px;
    height: 50px;
    padding: 10px 24px 10px 24px;
    border-radius: 6px;
    gap: 8px;
    background: #6200EE;
    border:3px solid #fff;
    transition:0.6s;
    font-size:16px;
    color: #fff;
    cursor: pointer;
   
`
const PageLink = styled.div`
  margin-top:15px;
 h3 {
    font-size: 17px;
    font-weight: 300;
    text-align: center;
    display:inline;
    margin-right:5px;
 }
   
  a {
    font-size: 17px;
    font-weight: 300;
    text-decoration: none;
    color:#6200EE ;
    transition: 0.6s;
  }
  a:hover {
    text-decoration:underline ;
  }
    
`
export default SignUp
