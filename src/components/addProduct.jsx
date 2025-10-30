import { useContext, useState } from "react";
import { myContext } from "./context";
export default function AddProduct() {
    const { product, setProduct } = useContext(myContext)
    const [newName, setNewName] = useState("")
    const [newBrand, setNewBrand] = useState("")
    const [newImage, setNewImage] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const[newCategory,setNewCategory]=useState("")
    const[newDescription,setNewDescription]=useState("")
    function handleAddProduct() {
        if (!newName || !newBrand || !newImage || !newPrice||!newCategory||!newDescription) {
            alert("Please fill all fields!");
            return
        }
        const newProduct = {
            name: newName,
            brand: newBrand,
            image: newImage,
            price: newPrice,
            category:newCategory,
            description:newDescription
        }
        setProduct([...product, newProduct])
        setNewName("")
        setNewBrand("")
        setNewImage("")
        setNewPrice("")
        setNewCategory("")
        setNewDescription("")
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",height: "100vh",  backgroundColor: "#f5f5f5", }}>
            
            <div style={{backgroundColor: "white",padding: "30px 40px",borderRadius: "10px",boxShadow: "0 4px 12px rgba(0,0,0,0.1)",width: "350px",textAlign: "center" }}> 
                <h2 style={{ marginBottom: "20px", color: "#333" }}>Add New Product</h2>
                <input style={{width: "100%",padding: "10px",marginBottom: "12px",borderRadius: "5px",border: "1px solid #ccc" }} type="text" placeholder="Product Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                <input style={{width: "100%",padding: "10px",marginBottom: "12px",borderRadius: "5px",border: "1px solid #ccc" }} type="text" placeholder="Brand" value={newBrand} onChange={(e) => setNewBrand(e.target.value)} />
                <input style={{width: "100%",padding: "10px",marginBottom: "12px",borderRadius: "5px",border: "1px solid #ccc" }} type="text" placeholder="Image URL" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
                <input style={{width: "100%",padding: "10px",marginBottom: "12px",borderRadius: "5px",border: "1px solid #ccc" }} type="text" placeholder="Product Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                 <input style={{width: "100%",padding: "10px",marginBottom: "12px",borderRadius: "5px",border: "1px solid #ccc" }} type="text" placeholder="Product Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                <input style={{width: "100%",padding: "10px",marginBottom: "12px",borderRadius: "5px",border: "1px solid #ccc" }} type="text" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                <button onClick={handleAddProduct} style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "8px 18px", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }} >Add Product</button>
            </div>
        </div>
    )

}