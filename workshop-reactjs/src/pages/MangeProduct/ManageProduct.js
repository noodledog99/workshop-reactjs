import React, { useState, useEffect } from "react";
import AddProductForm from "../../components/AddProductForm";
import TableProducts from "../../components/TableProducts";
import { getAllProducts, addProduct, deleteProduct } from "../../api/api";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await getAllProducts().then((res) => {
      if (res.status === "success") {
        let data = res.data.filter((item) => {
          return item.user_id === localStorage.getItem("user_id");
        });
        setProducts(data);
      }
    });
  };

  const isAddProduct = async (product) => {
    await addProduct(product).then((res) => {
      if (res.status === "success") {
        fetchAllProducts();
      }
    });
  };

  const removeProduct = async (product_id) => {
    await deleteProduct(product_id).then((res) => {
      if (res.status === "success") {
        fetchAllProducts();
      }
    });
  };

  return (
    <div>
      <div className="manage-area pt-4">
        <div className="container">
          <section className="head-title">
            <h1>Manage Product</h1>
            <p>Manage your product here</p>
          </section>
          <section className="add-area">
            <AddProductForm isAddProduct={isAddProduct} />
          </section>
          <section>
            <TableProducts
              products={products}
              isFlag={false}
              removeProduct={removeProduct}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
