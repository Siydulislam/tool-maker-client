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
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import { Toaster } from "react-hot-toast";
import RequireAdmin from "./Pages/Auth/RequireAdmin";
import Payment from "./Pages/Dashboard/Payment";


function App() {
  return (
    <>
      <Toaster />
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
        <Route path="/purchase/:purchaseItemId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="/dashboard" element={
          <RequireAdmin>
            <Dashboard />
          </RequireAdmin>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="manageOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="addProduct" element={<AddAProduct></AddAProduct>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
