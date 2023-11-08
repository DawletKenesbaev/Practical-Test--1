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
  height: 100vh;
`
export const Container = styled.div`
  margin:0 auto;
  background: #b3b1b1;
  padding: 0 20px;
  max-width: 1240px;
`

export default App
