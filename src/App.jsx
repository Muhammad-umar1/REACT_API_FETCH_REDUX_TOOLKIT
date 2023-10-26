import "./App.css";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import PostList from "./components/PostShow/PostList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/PostShow/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/postList" element={<PostList />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
