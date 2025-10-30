import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
    const nav=useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const adminEmail = "admin@gmail.com"
    const adminPassword = "admin@123"
    function handleLogin() {
        if (email === adminEmail && password === adminPassword) {
            alert("login Successfull")
            nav("/dash")
        } else {
            alert("email or password entered is wrong!")
        }
    }
    return (
        <div style={{backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231219/pngtree-shopping-cart-3d-shopping-cart-purple-image_15525531.png')", backgroundSize: "cover", backgroundPosition: "center", display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",height: "100vh", backgroundColor: "white",}}>
            <div style={{ display: "flex", flexDirection: "column", width: "350px", gap: "15px", padding: "30px", marginLeft: "500px", border: "1px solid rgba(214, 128, 185, 1)", borderRadius: "20px", boxShadow: "0 10px 20px rgba(204, 111, 192, 0.2)", backgroundColor: "rgba(158, 100, 158, 0.9)" }}>
                 <h2 style={{ textAlign: "center", marginBottom: "10px", color:"white" }}>Admin Login</h2>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ padding: "10px",borderRadius: "5px",border: "1px solid #ccc",outline: "none",fontSize: "16px"}} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: "10px",borderRadius: "5px", border: "1px solid #ccc",outline: "none",fontSize: "16px", }}/>
                <button onClick={handleLogin} style={{ padding: "10px", borderRadius: "5px",border: "none", backgroundColor: "#b65596ff", color: "white",fontSize: "16px",cursor: "pointer" }}>Login</button>
            </div>
        </div>
    )
}