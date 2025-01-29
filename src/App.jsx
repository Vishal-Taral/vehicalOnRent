import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Offers from "./pages/Offers";
import Reviews from "./pages/Reviews";
import Category from "./pages/Category";
import Cars from "./pages/Cars";
import Bikes from "./pages/Bikes";
import PrivateRoute from "./components/RoutAuthentication/PrivateRout";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/category/cars" element={<Cars />} />
            <Route path="/category/bikes" element={<Bikes />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Reviews" element={<Reviews />} />
          
          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/category/cars/Payment" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
