import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Dashboard from "./components/Dashboard";
import Login from "./screens/Login";
import PageNotFound from "./screens/PageNotFound";
import Cart from "./screens/Cart";
import Coindetail from "./screens/Coindetail";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="coin/:id" element={<Coindetail />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
