import React, { useState, useEffect } from "react";
import AddProductForm from "../../components/AddProductForm";
import TableProducts from "../../components/TableProducts";
import { getAllProducts, addProduct, deleteProduct } from "../../api/api";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [totalPosts, setTotalPost] = useState();
  const [sortTitle, setSortTitle] = useState(true);
  const [sortDetail, setSortDetail] = useState(true);
  const [sortStock, setSortStock] = useState(true);
  const [sortPrice, setSortPrice] = useState(true);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    await getAllProducts().then((res) => {
      if (res.status === "success") {
        let data = res.data.filter((item) => {
          return (
            item.user_id === localStorage.getItem("user_id") &&
            item.title !== null &&
            item.detail !== null &&
            item.stock !== null &&
            item.price !== null
          );
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

  const currentPosts = () => {
    return products
  };

  const setStatus = (sort, key) => {
    var ststus = sort ? false : true;
    switch (key) {
      case "title":
        setSortTitle(ststus);
        if (sortTitle) {
          products.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
        } else {
          products.sort((a, b) => {
            return b.title.localeCompare(a.title);
          });
        }
        break;
      case "detail":
        setSortDetail(ststus);
        if (sortDetail) {
          products.sort((a, b) => {
            return a.detail.localeCompare(b.detail);
          });
        } else {
          products.sort((a, b) => {
            return b.detail.localeCompare(a.detail);
          });
        }
        break;
      case "stock":
        setSortStock(ststus);
        if (sortStock) {
          products.sort((a, b) => {
            return a.stock - b.stock;
          });
        } else {
          products.sort((a, b) => {
            return b.stock - a.stock;
          });
        }
        break;
      case "price":
        setSortPrice(ststus);
        if (sortPrice) {
          products.sort((a, b) => {
            return a.price - b.price;
          });
        } else {
          products.sort((a, b) => {
            return b.price - a.price;
          });
        }
        break;
      default:
        break;
    }
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
              products={currentPosts}
              isFlag={false}
              setStatus={setStatus}
              removeProduct={removeProduct}
              setSortTitle={setSortTitle}
              sortTitle={sortTitle}
              setSortDetail={setSortDetail}
              sortDetail={sortDetail}
              setSortStock={setSortStock}
              sortStock={sortStock}
              setSortPrice={setSortPrice}
              sortPrice={sortPrice}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
