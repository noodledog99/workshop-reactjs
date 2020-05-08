import $ from "jquery";
import React, { useState, useEffect } from "react";

import { getAllProducts } from "../../api/api";
import TableProducts from "../../components/TableProducts";

import "./Products.css";
import Pagination from "../../components/Pagination";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [reuseProducts, setReuseProducts] = useState();
  const [flag, setFalg] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const [totalPosts, setTotalPost] = useState([]);
  const [sortTitle, setSortTitle] = useState(true);
  const [sortDetail, setSortDetail] = useState(true);
  const [sortStock, setSortStock] = useState(true);
  const [sortPrice, setSortPrice] = useState(true);
  const [keyword, setKeyword] = useState("");

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
            item.price !== undefined &&
            item.title !== null &&
            item.detail !== null &&
            item.stock !== null &&
            item.price !== null
          );
        });
        setProducts(data);
        setReuseProducts(data);
        setNumberPage(data.length);
      }
    });
  };

  const isGetAllProducts = () => {
    setNumberPage(products.length);
    setReuseProducts(products);
    setFalg(true);
  };

  const isGetMyProducts = () => {
    let data = products.filter((item) => {
      return item.user_id === localStorage.getItem("user_id");
    });
    setNumberPage(data.length);
    setReuseProducts(data);
    setFalg(true);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentPosts = () => {
    if (keyword == "") {
      return reuseProducts.slice(indexOfFirstPost, indexOfLastPost);
    } else {
      return reuseProducts.filter((item) => {
        return (
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.detail.toLowerCase().includes(keyword.toLowerCase()) ||
          item.stock == keyword ||
          item.price == keyword
        );
      });
    }
  };

  const setStatus = (sort, key) => {
    var ststus = sort ? false : true;
    switch (key) {
      case "title":
        setSortTitle(ststus);
        console.log(sortTitle);
        if (sortTitle) {
          sortASC(key);
        } else {
          sortDES(key);
        }
        break;
      case "detail":
        setSortDetail(ststus);
        if (sortDetail) {
          sortASC(key);
        } else {
          sortDES(key);
        }
        break;
      case "stock":
        setSortStock(ststus);
        if (sortStock) {
          sortNumberASC(key);
        } else {
          sortNumberDES(key);
        }
        break;
      case "price":
        setSortPrice(ststus);
        if (sortPrice) {
          sortNumberASC(key);
        } else {
          sortNumberDES(key);
        }
        break;
      default:
        break;
    }
  };

  const sortASC = (key) => {
    reuseProducts.sort((a, b) => {
      return a[`${key}`].localeCompare(b[`${key}`]);
    });
  };

  const sortDES = (key) => {
    reuseProducts.sort((a, b) => {
      return b[`${key}`].localeCompare(a[`${key}`]);
    });
  };

  const sortNumberASC = (key) => {
    reuseProducts.sort((a, b) => {
      return a[`${key}`] - b[`${key}`];
    });
  };

  const sortNumberDES = (key) => {
    reuseProducts.sort((a, b) => {
      return b[`${key}`] - a[`${key}`];
    });
  };

  const setNumberPage = (numberData) => {
    console.log(numberData);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(numberData / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    setTotalPost(pageNumbers);
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
                  <a
                    href="#target1"
                    id="target1"
                    onClick={() => isGetAllProducts()}
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#target2"
                    id="target2"
                    onClick={() => isGetMyProducts()}
                  >
                    My Product
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-3 pb-3">
            <div className="row justify-content-end">
              <div className="col-4">
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {reuseProducts !== undefined && (
            <TableProducts
              products={currentPosts}
              isFlag={flag}
              setStatus={setStatus}
              setSortTitle={setSortTitle}
              sortTitle={sortTitle}
              setSortDetail={setSortDetail}
              sortDetail={sortDetail}
              setSortStock={setSortStock}
              sortStock={sortStock}
              setSortPrice={setSortPrice}
              sortPrice={sortPrice}
            />
          )}
          {totalPosts !== undefined && (
            <Pagination
              totalPosts={totalPosts}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
