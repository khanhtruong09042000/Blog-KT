import Home from "./pages/Home";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Reports from "./pages/Reposts";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Update from "./pages/Update";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Img from "./components/Img";

function App() {
  const { user } = useContext(Context)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={user ? <HomePages /> : <Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/settings" element={<Update />} />
        <Route path="/login" element={user ? <HomePages /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/img" element={<Img />} />
      </Routes>
    </Router>
  );
}

export default App;
