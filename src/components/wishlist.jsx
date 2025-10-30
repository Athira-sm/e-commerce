import { useContext } from "react";
import { myContext } from "./context";
import { useNavigate } from "react-router-dom";
export default function Wishlist() {
     const nav = useNavigate()
    const { like, setLike } = useContext(myContext)
    function handleRemove(product) {
        setLike(like.filter(items => items !== product))
    }
    return (
        <div style={{ textAlign: "center", padding: "20px" }}><h1>Your Wishlist</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", alignItems: "center" }}>{
                like.map(product =>
                    <div style={{ width: "250px", height: "auto", border: "1px solid black", boxShadow: "0px 0px 5px 2px grey", padding: "10px", borderRadius: "10px" }}>
                        <h3>{product.name}</h3>
                        <h4>{product.brand}</h4>
                        <img src={product.image} alt="" style={{ width: "150px", height: "150px" }} />
                        <p>Price: ₹{product.price}</p>
                        <button onClick={() => handleRemove(product)} style={{ backgroundColor: "grey", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", margin: "5px" }}>Remove</button>
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
            </div>
        </div>
    )
}