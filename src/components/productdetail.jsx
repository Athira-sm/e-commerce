import { useContext } from "react";
import { myContext } from "./context";
import { useParams,useNavigate  } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductDetails() {
    const  nav = useNavigate()
    const { product, cart, setCart } = useContext(myContext)
    const { productID } = useParams()
    function handleCart(products) {
        console.log(product)
        if (cart.includes(products)) {
            setCart(cart.filter(data => data !== products))
        } else {
            setCart([...cart, products])

        }

    }
    const products = product.find(items => items.id == productID)
    return (
        <div style={{
            maxWidth: "400px",
            margin: "50px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textAlign: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: "#f9f9f9",
        }}>
            <h1 style={{
                color: "#333",
                fontSize: "2rem",
                margin: "10px 0",
            }}>{products.name}</h1>
            <h2 style={{
                color: "#777",
                fontSize: "1.2rem",
                marginBottom: "15px",
            }}>{products.brand}</h2>
            <img src={products.image} alt="" style={{ width: "300px", height: "300px" }} />
            <h3 style={{
                color: "#555",
                fontSize: "1rem",
                marginBottom: "20px",
                lineHeight: "1.6",
            }}>{products.description}</h3>
            <p style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#5a47b1ff",
            }}> Price: ₹{products.price}</p>
            <button
                onClick={() => handleCart(products)} style={{
                    fontSize: "20px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: cart.includes(products) ? "green" : "gray",
                    
                }}>
                {
                    cart.includes(products) ? <FaShoppingCart /> : <BsCart />
                }
                cart
            </button>
            <br />   
            <button
                onClick={() => nav(-1)} 
                style={{
                    fontSize: "16px",
                    padding: "8px 16px",
                    border: "1px solid #847aafff",
                    borderRadius: "5px",
                    backgroundColor: "#1f0586ff",
                    color: "white",
                    cursor: "pointer",
                    marginTop: "10px"
                }}>
               Go Back
            </button>
        </div>
    )
}