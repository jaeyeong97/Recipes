import "./App.css";
import Home from "./pages/HomePage/Home";
import styled from "styled-components";

const AppWrap = styled.div`
  width : 100%;
  height : 100%;
  background-image : url(/assets/Food.png);
  background-size : 100%;
  
  @media (min-width: 768px) {
    background-attachment: fixed;
    background-repeat : no-repeat;
  }
`;

function App() {
  return (
      <AppWrap>
        <Home />
      </AppWrap>
  );
}

export default App;
