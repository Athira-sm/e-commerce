import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { myContext } from "./components/context";
import { useState } from "react";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import Product from "./components/product";
import { productData } from "./components/productData";
import ProductDetails from "./components/productdetail";
import Cart from "./components/cart";
import Wishlist from "./components/wishlist";
import Admin from "./components/admin";
import Dashoard from "./components/dashoard";
import AdminProduct from "./components/adminproduct";
import AdminUser from "./components/adminuser";
import AddProduct from "./components/addProduct";
function App() {
    const [user, setUser] = useState(null)
    const [userList, setUserList] = useState([])
    const [product, setProduct] = useState(productData)
    const [cart, setCart] = useState([])
    const [like, setLike] = useState([])
    const val = { user, setUser, product, setProduct, cart, setCart, like, setLike ,userList, setUserList,}
    return (
        <div>
            <myContext.Provider value={val}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/product" element={<Product />}></Route>
                        <Route path="/productdetails/:productID" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/wishlist" element={<Wishlist />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                        <Route path="/dash" element={<Dashoard />}></Route>
                        <Route path="/adminproduct" element={<AdminProduct />}></Route>
                        <Route path="/adminuser" element={<AdminUser />}></Route>
                        <Route path="/addproduct" element={<AddProduct />}></Route>
                    </Routes>
                </BrowserRouter>
            </myContext.Provider>

        </div>
    )
}
export default App
