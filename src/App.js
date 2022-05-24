import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Footer from './Components/Footer';
import { Route, Routes } from "react-router-dom";
import Tools from "./Pages/Home/Tools";
import Reviews from "./Pages/Home/Reviews";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Home/Contact";
import Login from "./Pages/Auth/Login";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Auth/Register";
import RequireAuth from "./Pages/Auth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
// import AddReview from "./Pages/Dashboard/AddReview";
// import MyProfile from "./Pages/Dashboard/MyProfile";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders />}></Route>
          {/* <Route path="/review" element={<AddReview />}></Route> */}
          {/* <Route path="/profile" element={<MyProfile />}></Route> */}
        </Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
