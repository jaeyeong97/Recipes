import "./App.css";
import Home from "./pages/HomePage/Home";
import styled from "styled-components";

const AppWrap = styled.div`
  background-image : url(/assets/Food.png);
  background-size : cover;
  background-repeat : no-repeat;
  background-attachment: fixed;
`;

function App() {
  return (
      <AppWrap>
        <Home />
      </AppWrap>
  );
}

export default App;
