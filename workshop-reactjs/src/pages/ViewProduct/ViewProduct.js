import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/api";

import "./ViewProduct.css";

export default function ViewProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await getAllProducts().then((res) => {
      if (res.status === "success") {
        let data = res.data.filter((item) => {
          return item.user_id === localStorage.getItem("user_id");
        });
        setProduct(data[0]);
      }
    });
  };

  return (
    <div className="product-bg">
      <div className="view-area d-flex align-items-center justify-content-center">
          <div className="container">
            <div class="product-detail">
              <h1>Product Detail</h1>
              <h2>Title: {product.title}</h2>
              <p>{product.detail}</p>
              <p>Stock: {product.stock}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
      </div>
    </div>
  );
}
