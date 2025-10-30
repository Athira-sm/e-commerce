import { useState } from "react";
import { useContext } from "react";
import { myContext } from "./context";
import { useNavigate,Link } from "react-router-dom";
export default function Register() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passworderror, setPasswordError] = useState("")
    const { userList, setUserList } = useContext(myContext);
    const nav = useNavigate()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[A-Z](?=.*\d).{4,}$/;

    function handleRegister() {
        if (!name || !username || !email || !password || !confirmPassword) {
            return alert("please fill all the fields!")

        }
        if (!emailRegex.test(email)) {
            return alert("Please enter a valid email address")
        }
        if (!passwordRegex.test(password)) {
            return setPasswordError("Password must start with a capital letter,and include at least one number.")
        }
        if (password !== confirmPassword) {
            return alert("password do not match")
        }

        const newuser = { name, username, email, password, confirmPassword }

        setUserList([...userList, newuser])
        alert("Registration successful!")
        nav("/login")
    }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor:"white"}}>
            <div style={{ display: "flex", flexDirection: "column", width: "350px", gap: "15px", padding: "30px",  border: "1px solid rgba(253, 251, 252, 1)", borderRadius: "20px", boxShadow: "0 10px 20px rgba(253, 246, 252, 0.2)", backgroundColor: "rgba(248, 248, 248, 0.9)" }}>
                <h1 style={{ textAlign: "center", color:"#47139bff" }}>User Registration</h1>
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input style={{ height: "20px", fontSize: "16px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #ccc", }} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password " />
                {
                    passworderror && <p style={{ color: "#47139bff" }}>{passworderror}</p>
                }
                <button style={{ height: "45px", fontSize: "18px", borderRadius: "10px", backgroundColor: "#364cadff", color: "white", border: "none", cursor: "pointer" }} onClick={handleRegister}>Register</button>
                <p style={{ textAlign: "center", marginTop: "10px",  }}>
                    Already have an account? <Link to="/login" style={{color: "#47139bff",fontSize:"18px"}}>login</Link>
                </p>
            </div>
        </div>
    )
}