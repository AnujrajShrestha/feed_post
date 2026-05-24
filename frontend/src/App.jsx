import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;