import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Footer from './Components/Footer';
import { Route, Routes } from "react-router-dom";
import Tools from "./Pages/Home/Tools";
import Reviews from "./Pages/Home/Reviews";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Home/Contact";
import Login from "./Pages/Auth/Login";


function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Header>
    </>
  );
}

export default App;
