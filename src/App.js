import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/HomePage/Home";
import styled from "styled-components";

const queryClient = new QueryClient();

const AppWrap = styled.div`
`;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrap>
        <Home />
      </AppWrap>
    </QueryClientProvider>
  );
}

export default App;
