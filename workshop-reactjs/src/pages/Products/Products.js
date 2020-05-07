import $ from "jquery";
import React, { useState, useEffect } from "react";

import { getAllProducts } from "../../api/api";
import TableProducts from "../../components/TableProducts";

import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [reuseProducts, setReuseProducts] = useState();
  const [flag, setFalg] = useState(true);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await getAllProducts().then((res) => {
      if (res.status === "success") {
        let data = res.data.filter((item) => {
          return (
            item.title !== undefined &&
            item.detail !== undefined &&
            item.stock !== undefined &&
            item.price !== undefined
          );
        });
        setProducts(data);
        setReuseProducts(data);
      }
    });
  };

  const isGetAllProducts = () => {
    setReuseProducts(products);
    setFalg(true);
  };

  const isGetMyProducts = () => {
    console.log(localStorage.getItem("user_id"));
    let data = products.filter((item) => {
      return item.user_id === localStorage.getItem("user_id");
    });
    setReuseProducts(data);
    setFalg(true);
  };

  return (
    <div>
      <div className="product-area">
        <div className="container pt-4">
          <h1 className="pb-2">Product</h1>
          <p>Every product you can see here</p>
          <div className="menubar">
            <div className="menubar-container">
              <ul>
                <li>
                  <a id="menu" onClick={() => isGetAllProducts()}>
                    All Products
                  </a>
                </li>
                <li>
                  <a id="menu" onClick={() => isGetMyProducts()}>
                    My Product
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {reuseProducts !== undefined && (
            <TableProducts products={reuseProducts} isFlag={flag} />
          )}
        </div>
      </div>
    </div>
  );
}
