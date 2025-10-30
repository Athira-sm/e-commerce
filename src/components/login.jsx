import { useState } from "react";
import { useContext } from "react";
import { myContext } from "./context";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {
    const nav = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setUser,userList } = useContext(myContext)
    function handleLogin() {
        const existingUser = userList.find((item) => item.username === username && item.password === password)
        if (!existingUser) {
            alert("Username or password you have entered is wrong!")
            return;
        }
        if (existingUser.banned) {
            alert("Your account has been banned. You cannot log in.")
            return
        }
        setUser(existingUser);
        alert("Login Successful!");
        nav("/");
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh",backgroundColor:"white" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "350px", gap: "15px", padding: "30px",  border: "1px solid rgba(253, 251, 252, 1)", borderRadius: "20px", boxShadow: "0 10px 20px rgba(253, 246, 252, 0.2)", backgroundColor: "rgba(248, 248, 248, 0.9)" }}>
                <h1 style={{ textAlign: "center", color: "#47139bff" }}>Login</h1>
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button style={{ height: "45px", fontSize: "18px", borderRadius: "10px", backgroundColor: "#2c2fddff", color: "white", border: "none", cursor: "pointer" }} onClick={handleLogin}>Login</button>
                <p style={{ marginTop: "10px", textAlign: "center",  }}>Don't have an account? <Link to="/register" style={{ color: "#4a16aaff", fontSize: "18px" }}>Register</Link></p>
            </div>
        </div>
    )
}
