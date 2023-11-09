import './App.css'
import Views from './views'
import styled from 'styled-components'
function App() {
  return (
   <Divv>
      <Views />
   </Divv>
  )
}
const Divv = styled.div`
  background: grey;
  width: 100vw;
  min-height: 100vh;
`


export default App
