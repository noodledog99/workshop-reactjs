import React, { useState, useEffect } from "react";
import "./Products.css";
import TableProducts from "../../components/TableProducts";
import { getAllProducts } from "../../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await getAllProducts().then((res) => {
      if (res.status === "success") {
        setProducts(res.data);
      }
    });
  };

  const isFlag = (key) => {
    switch (key) {
      case "get-products":
        console.log("get-products");
        break;
      case "get-my-products":
        console.log("get-my-products");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h1>Product</h1>
      <div className="container">
        <div className="menubar">
          <div className="menubar-container">
            <ul>
              <li>
                <a onClick={() => isFlag("get-products")}>All Products</a>
              </li>
              <li>
                <a onClick={() => isFlag("get-my-products")}>My Product</a>
              </li>
            </ul>
          </div>
        </div>
        <TableProducts products={products} />
      </div>
    </div>
  );
}
