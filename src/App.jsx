import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  //  Fetch data from DummyJSON when app loads
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>API in React</h1>
      <h2>Number of products are: {products.length}</h2>
      <h1>DummyJSON API Example</h1>

      {/*  Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id} 
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "#4a4a4aff",
              textAlign: "center",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              width="150"
              style={{ borderRadius: "8px" }}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
