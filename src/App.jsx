import styled from "styled-components";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";


const Container = styled.div`
height: 100vh;

`;

function App() {
  return (
    <Container >
      <Navbar/>
      <Intro/>
    </Container>
  );
}

export default App;
