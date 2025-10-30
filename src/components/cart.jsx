import { useContext } from "react";
import { myContext } from "./context";
import { useNavigate } from "react-router-dom";
export default function Cart() {
     const  nav = useNavigate()
    const { cart, setCart } = useContext(myContext)
    function handleRemove(product) {
        setCart(cart.filter(items => items !== product))
    }
    function handleIncrement(product) {
        setCart(cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }
    function handleDecrement(product) {
        setCart(cart.map(item =>
            item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ))
    }
    const calculateTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div style={{ textAlign: "center", padding: "20px" }}><h1>🛒 Your Cart</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", alignItems: "center" }}>

                {
                    cart.map((product =>
                        <div style={{ width: "250px", height: "auto", border: "1px solid black", boxShadow: "0px 0px 5px 2px grey", padding: "10px", borderRadius: "10px" }}>
                            <h3>{product.name}</h3>
                            <h4>{product.brand}</h4>
                            <img src={product.image} alt="" style={{ width: "150px", height: "150px", marginBottom: "10px" }} />
                            <p>Price: ₹{product.price}</p>
                            <p>{product.quantity}</p>
                            <p><b>{product.quantity * product.price}</b></p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "5px", marginBottom: "5px" }}>
                                <button onClick={() => handleIncrement(product)} style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>+</button>
                                <button onClick={() => handleDecrement(product)} style={{ backgroundColor: "#022346ff", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>-</button>
                            </div>
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
                    ))
                }

            </div>
            <h2>Total: ₹{calculateTotal}</h2>
            <h2>Total Item: ₹{totalItems}</h2>
        </div>
    )
}