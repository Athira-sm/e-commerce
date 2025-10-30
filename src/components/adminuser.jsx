import { useContext, useState } from "react";
import { myContext } from "./context";

export default function AdminUser() {
    const { user, setUser } = useContext(myContext);
    const [banned, setUnBanned] = useState(false)
    console.log(banned, setUnBanned)
    
    function handleDelete(index) {
        const deleteUser = [...user]
        deleteUser.splice(index, 1)
        setUser(deleteUser)
    }

    function handleBan(index) {
        const updatedUsers = [...user]
        updatedUsers[index].banned = !updatedUsers[index].banned
        setUser(updatedUsers)
    }

    return (
        <div
            style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231219/pngtree-shopping-cart-3d-shopping-cart-purple-image_15525531.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", }}>

            <h1 style={{ color: "#f1ebebff", marginBottom: "30px", fontSize: "50px", }}>User Details</h1>

            <div style={{ width: "100%", maxWidth: "400px", }} >
                {user.map((users, index) => (
                    <div style={{ backgroundColor: "#fff", border: "5px solid #141414ff", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", padding: "20px" }} >
                        <p> Name: {users.name}</p>
                        <p> Email: {users.email}</p>
                        <p> Password {users.password}</p>
                        <div style={{ marginTop: "15px", display: "flex", gap: "20px" }}>
                            <button onClick={() => handleDelete(index)} style={{ backgroundColor: "black", color: "white", border: "none", borderRadius: "8px", padding: "8px 14px", cursor: "pointer", }}> Delete</button>
                            <button onClick={() => handleBan(index)} style={{ backgroundColor: "black", color: "white", border: "none", borderRadius: "8px", padding: "10px 25px", cursor: "pointer", }}>
                                {users.banned ? "Unban" : "Ban"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
