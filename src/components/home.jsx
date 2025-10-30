import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./context";
import { FaUserAlt, FaUserShield, FaArrowRight } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
export default function Home() {
  const nav = useNavigate();
  const { product, cart, setCart, like, setLike, user } = useContext(myContext);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [searchData, setSearchData] = useState("")
  const banners = [
    { title: "Phones", subtitle: "From ₹9,999", desc: "Latest smartphones from top brands.", img: "https://etimg.etb2bimg.com/photo/117110848.cms", bg: "linear-gradient(90deg, #9370DB 0%, #BA55D3 100%)" },
    { title: "Footwears", subtitle: "Up to 60% Off", desc: "Experience the best quality.", img: "https://t4.ftcdn.net/jpg/08/92/04/09/360_F_892040923_H2J3H2W5TglEtePvCf2riBHcDUre2wWp.jpg", bg: "linear-gradient(90deg, #D8BFD8 0%, #EE82EE 100%)" },
    { title: "Watches", subtitle: "Trendy & Smart", desc: "Stylish watches for every occasion.", img: "https://iflwatches.com/cdn/shop/articles/thumbnail-1704375617992_54af31a8-c6cd-4821-84e6-ff99775e7f25.jpg?v=1714386348&width=1000", bg: "linear-gradient(90deg, #FFA07A 0%, #FF6347 100%)" },

  ];
  const filteredData = product.filter((items) => {
    return (
      items.name.toLowerCase().includes(searchData.toLowerCase()) ||
      items.brand.toLowerCase().includes(searchData.toLowerCase()) ||
      items.category.toLowerCase().includes(searchData.toLowerCase()) ||
      items.description.toLowerCase().includes(searchData.toLowerCase()) ||
      items.price.toString().includes(searchData)
    )
  })
  function handlePrevBanner() {
    setBannerIndex(bannerIndex === 0 ? banners.length - 1 : bannerIndex - 1);
  }

  function handleNextBanner() {
    setBannerIndex(bannerIndex === banners.length - 1 ? 0 : bannerIndex + 1);
  }

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

  const filteredProduct = filteredData.slice(0, 5);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#fff", color: "#000", width: "100vw" }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 50px", backgroundColor: "#10033dff", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", cursor: "pointer", color: "#f6f4f7ff" }} onClick={() => { nav("/"); }}>Shop Now</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "8px", borderRadius: "50%" }} onClick={() => { nav("/login"); }}><FaUserAlt size={20} /></button>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "8px", borderRadius: "50%" }} onClick={() => { nav("/admin"); }}><FaUserShield size={20} /></button>
          <button style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "8px", borderRadius: "50%" }} onClick={() => { nav("/cart"); }}><GrCart size={20} /> </button>
        </div>
      </div>


      <div style={{ width: "90%", margin: "30px auto", height: "300px", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff", overflow: "hidden", padding: "0 50px", position: "relative", transition: "0.5s", background: banners[bannerIndex].bg }}>
        <div style={{ maxWidth: "45%" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "10px" }}>
            {banners[bannerIndex].title} </h2>
          <p style={{ fontSize: "16px", color: "#fff" }}>{banners[bannerIndex].desc}</p>
        </div>
        <div style={{ width: "40%", textAlign: "right" }}>
          <img src={banners[bannerIndex].img} alt="Banner" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "10px" }} />
        </div>
        <button onClick={handlePrevBanner} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", background: "#fff", color: "#8A2BE2", border: "none", fontSize: "28px", borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer" }}>‹</button>
        <button onClick={handleNextBanner} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "#fff", color: "#8A2BE2", border: "none", fontSize: "28px", borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer" }}>›</button>
      </div>


      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
        {
          filteredProduct.map(product =>
            <div style={{ backgroundColor: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 15, textAlign: "center", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
              <h3>{product.name}</h3>
              <h4>{product.brand}</h4>

              <img
                src={product.image}
                alt={product.name}
                style={{ width: "150px", height: "150px", marginLeft: "30px", cursor: "pointer" }}
                onClick={() => { nav(`/productdetails/${product.id}`) }} />

              <p>Price: ₹{product.price}</p>
              <button onClick={() => handleLike(product)} style={{
                fontSize: "24px",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: like.includes(product) ? "red" : "gray",

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


      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <button onClick={function () { nav("/product"); }} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "12px 25px", backgroundColor: "#8A2BE2", color: "#fff", border: "none", borderRadius: "30px", cursor: "pointer", fontWeight: "600", fontSize: "16px" }}>
          View All Products <FaArrowRight />
        </button>
      </div>

      <footer style={{ backgroundColor: "#10033dff", color: "#eae6ecff", textAlign: "center", padding: "20px", fontSize: "14px", borderTop: "1px solid #DDA0DD" }}>
        <p>© 2025 My Project — Built by Athira S M</p>
      </footer>
    </div>
  );
}
