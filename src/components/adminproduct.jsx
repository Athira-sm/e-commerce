import { useContext, useState } from "react";
import { myContext } from "./context";
import { useNavigate } from "react-router-dom";
export default function AdminProduct() {
    const nav=useNavigate()
    const { product, setProduct } = useContext(myContext)
    const [edit, setEdit] = useState(-1)
    const [editName, setEditname] = useState("")
    const [editBrand, setEditBrand] = useState("")
    const [editImage, setEditImage] = useState("")
    const [editPrice, setEditPrice] = useState("")
    function handleDelete(index) {
        const deleteProduct = [...product]
        deleteProduct.splice(index, 1)
        setProduct(deleteProduct)
    }
    function handleEdit(index) {
        const products = product[index]
        setEdit(index)
        setEditname(products.name)
        setEditBrand(products.brand)
        setEditImage(products.image)
        setEditPrice(products.price)
    }
    function handleSave(index) {
        const updatedProduct = [...product]
        updatedProduct[index] = {
            ...updatedProduct[index],
            name: editName,
            brand: editBrand,
            image: editImage,
            price: editPrice,
        }
        setProduct(updatedProduct)
        setEdit(-1)

    }

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginRight:"900px" }} >
                <button onClick={() => nav("/addproduct")} style={{ backgroundColor: "#3f2c2cff", color: "white", border: "none", padding: "8px 28px", borderRadius: "25px", cursor: "pointer", fontSize: "16px", marginTop: "20px" }}>  Add Product </button>
            </div>
           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "20px" }}>
            {
                product.map((product, index) =>
                    <div style={{ width: "250px", height: "auto", border: "1px solid black", boxShadow: "0px 0px 5px 2px grey", padding: "10px", borderRadius: "10px", marginTop: "20px" }}>
                        <h3>{product.name}</h3>
                        <h4>{product.brand}</h4>
                        <img src={product.image} alt="" style={{ width: "150px", height: "150px" }} />
                        <p>Price: ₹{product.price}</p>
                        <button onClick={() => handleEdit(index)} style={{ backgroundColor: "green", color: "white", border: "none", padding: "8px 18px", borderRadius: "5px", cursor: "pointer", margin: "5px" }}>Edit</button>
                        <button onClick={() => handleDelete(index)} style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", margin: "5px" }}>Delete</button>
                        {edit === index && (
                            <div>
                                <input type="text" value={editName} onChange={(e) => setEditname(e.target.value)} placeholder="productname" />
                                <input type="text" value={editBrand} onChange={(e) => setEditBrand(e.target.value)} placeholder="productbrand" />
                                <input type="text" value={editImage} onChange={(e) => setEditImage(e.target.value)} placeholder="productimage" />
                                <input type="text" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} placeholder="productprice" />
                                <button onClick={() => handleSave(index)} style={{ backgroundColor: "orange", color: "white", border: "none", padding: "8px 18px", borderRadius: "5px", cursor: "pointer", margin: "5px" }}>Save</button>
                            </div>
                        )

                        }
                    </div>
                )
            }
            </div>
        </div>
    )
}