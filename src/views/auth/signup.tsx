import React from 'react'
import styled from 'styled-components'
import Googleicon from '../../assets/images/social-logos.svg';
import Facebookicon from '../../assets/images/Facebook.png'

function SignUp() {
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
        <Form>
            <Label htmlFor="name">Your name</Label>
            <Input placeholder='Dawlet King' type="text" id="name" name="name" />
            <Label htmlFor="email">Your email</Label>
            <Input placeholder='Enter your email' type="email" id="email" name="email" />
            <Label htmlFor="username">Your username</Label>
            <Input placeholder='Enter your username' type="text" id="username" name="username" />
        </Form>   
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
    padding:0 10px;
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
        justify-content: center; 
        width: 374px;
        height: 44px;
        padding: 3px 54px;
        border-radius: 4px;
        border: 1px;
        gap: 16px;
        margin-top:10px; 
        transition :0.6s ;
        h2 {
        font-family: Mulish;
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0px;
        text-align:left;
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
        margin-top: 16px;
        font-size:14px;
    }
    .span-line {
        display: block;
        height: 1px;
        width: 140px;
        background: #000;
    }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  justify-content: start;
  width: 300px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  text-align:left;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export default SignUp
