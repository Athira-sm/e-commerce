import { myContext } from "./context";
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
export default function Product() {
    const nav = useNavigate()
    const { product, cart, setCart, like, setLike,user } = useContext(myContext)
    const [searchData, setSearchData] = useState("")

    const filteredData = product.filter((items) => {
        return (
            items.name.toLowerCase().includes(searchData.toLowerCase()) ||
            items.brand.toLowerCase().includes(searchData.toLowerCase()) ||
            items.category.toLowerCase().includes(searchData.toLowerCase()) ||
            items.description.toLowerCase().includes(searchData.toLowerCase()) ||
            items.price.toString().includes(searchData)
        )
    })
     function handleCart(product) {
    if (!user) {
      return nav("/login");
    }

    if (cart.includes(product)) {
      setCart(cart.filter(data => data !== product));
    } else {
      setCart([...cart, product]);
    }
  }

  function handleLike(product) {
    if (!user) {
      return nav("/login");
    }

    if (like.includes(product)) {
      setLike(like.filter(items => items !== product));
    } else {
      setLike([...like, product]);
    }
  }


    return (
        <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: 30,
                gap: 10
            }}>

                <input
                    type="text"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    placeholder="Search products..."
                    style={{
                        flex: 1,
                        minWidth: 200,
                        padding: "6px 13px",
                        fontSize: 16,
                        border: "2px solid #141414ff",
                        borderRadius: 8,

                    }}

                />


                <button
                    onClick={() => nav("/cart")}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 15px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontWeight: "bold",

                    }}

                >
                    <GrCart size={20} /> Cart
                </button>

                <button
                    onClick={() => nav("/wishlist")}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 15px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontWeight: "bold",

                    }}

                >
                    <FcLike size={20} /> Wishlist
                </button>
            </div>


            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "flex-start" }}>
                {
                    filteredData.map(product =>
                        <div style={{ backgroundColor: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 15, textAlign: "center", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                            <h3>{product.name}</h3>
                            <h4>{product.brand}</h4>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "150px", height: "150px", marginLeft: "30px", cursor: "pointer" }}
                                onClick={() => {
                                    if (!user) {
                                        nav("/login");
                                    } else {
                                        nav(`/productdetails/${product.id}`)
                                    }
                                }}
                            />

                            <p>Price: ₹{product.price}</p>
                            <button onClick={() => handleLike(product)} style={{
                                fontSize: "24px",
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                color: like.includes(product) ? "red" : "gray",
                                transition: "transform 0.2s",
                            }}>{
                                    like.includes(product) ? <AiFillLike /> : <AiOutlineLike />
                                }</button>

                            <button
                                onClick={() => handleCart(product)} style={{
                                    fontSize: "24px",
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    color: cart.includes(product) ? "green" : "gray",
                                    transition: "transform 0.2s",
                                }}>
                                {
                                    cart.includes(product) ? <FaShoppingCart /> : <BsCart />
                                }

                            </button>

                        </div>
                    )}
            </div>
        </div>
    )
}


