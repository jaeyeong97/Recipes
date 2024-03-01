import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Item from "./pages/Item";
import ItemModal from "./components/ItemModal";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/item_modal/:id" element={<ItemModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
