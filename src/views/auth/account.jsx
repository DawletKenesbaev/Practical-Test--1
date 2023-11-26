import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Box>
        <Divv>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
      <Link to='/'>
        <button>Main Page</button></Link>
    </Divv>
    </Box>
  
  );
};
const Divv = styled.div`
  width:500px;
  background: red;
  text-align: center;
  padding:15px 10px;
  font-size:21px;
  background:#FEFEFE;
  height:400px;
  display:flex;
  flex-direction: column;
  h1 {
    font-size:43px;
  }
  p {
    font-size:23px;
    margin:20px 0;

  }
  button {
    width: 174px;
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
  }
  button:hover {
    background: transparent;
    border: 2px solid #6200EE;
    color:#6200EE ;
  }
`
const Box =styled.div`
  padding-top:100px;
  
`


export default Account;