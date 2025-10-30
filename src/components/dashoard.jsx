import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const nav = useNavigate()
    return (
        <div style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231219/pngtree-shopping-cart-3d-shopping-cart-purple-image_15525531.png')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "white", }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "190px" }} >
                <h1 style={{ fontSize: "50px",color: "white",marginLeft:"300px",textShadow: "2px 2px 5px rgba(0,0,0,0.4)", marginBottom: "20px",   }}> Dashboard </h1>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginLeft:"320px" }}>
                    <button onClick={() => nav("/adminproduct")}style={{color: "#8686acff",border: "2px solid #b878b8ff", textShadow: "2px 2px 5px rgba(132, 132, 172, 0.4)",borderRadius: "30px",padding: "7px 20px",fontSize: "20px",cursor: "pointer"}}> Product</button>
                    <button onClick={() => nav("/adminuser")}style={{color: "#8686acff",border: "2px solid #b878b8ff", textShadow: "2px 2px 5px rgba(132, 132, 172, 0.4)",borderRadius: "30px",padding: "7px 29px",fontSize: "20px",cursor: "pointer"}} >User</button>

                </div>
            </div>
        </div>
    );
}
