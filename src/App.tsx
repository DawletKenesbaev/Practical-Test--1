import './App.css'
import styled from 'styled-components'
import SignIn from './views/auth/signin';
import SignUp from './views/auth/signup';
import Account from './views/auth/account';
import { Route, Routes } from 'react-router-dom'; // Corrected import
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './views/auth/protected';
import Views from './views';

function App() {
  return (
    <Divv>
      <AuthContextProvider>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route
              path='/views'
              element={
                <ProtectedRoute>
                  <Views />
                </ProtectedRoute>
              }
            />
            <Route path="/account" element={
                 <ProtectedRoute> 
                      <Account />
                    </ProtectedRoute>
              } 
            />
          </Routes>
      </AuthContextProvider>
    </Divv>
  );
}

export default App;

const Divv = styled.div`
  background: grey;
  width: 100vw;
  min-height: 100vh;
`

//https://youtu.be/6SINAXYhgXE