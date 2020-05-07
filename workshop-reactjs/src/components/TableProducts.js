import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TableProducts(props) {
  const [keyword, setKeyword] = useState("");
  const [sortTitle, setSortTitle] = useState(true);
  const [sortDetail, setSortDetail] = useState(true);
  const [sortStock, setSortStock] = useState(true);
  const [sortPrice, setSortPrice] = useState(true);

  const setStatus = (sort, key) => {
    var ststus = sort ? false : true;
    switch (key) {
      case "title":
        setSortTitle(ststus);
        if (sortTitle) {
          props.products.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
        } else {
          props.products.sort((a, b) => {
            return b.title.localeCompare(a.title);
          });
        }
        break;
      case "detail":
        setSortDetail(ststus);
        if (sortDetail) {
          props.products.sort((a, b) => {
            return a.detail.localeCompare(b.detail);
          });
        } else {
          props.products.sort((a, b) => {
            return b.detail.localeCompare(a.detail);
          });
        }
        break;
      case "stock":
        setSortStock(ststus);
        if (sortStock) {
          props.products.sort((a, b) => {
            return a.stock - b.stock;
          });
        } else {
          props.products.sort((a, b) => {
            return b.stock - a.stock;
          });
        }
        break;
      case "price":
        setSortPrice(ststus);
        if (sortPrice) {
          props.products.sort((a, b) => {
            return a.price - b.price;
          });
        } else {
          props.products.sort((a, b) => {
            return b.price - a.price;
          });
        }
        break;
      default:
        break;
    }
  };

  const setArrow = (sort) => {
    return sort ? (
      <i className="fas fa-arrow-up" ></i>
    ) : (
      <i className="fas fa-arrow-down" style={{color:"black"}}></i>
    );
  };

  console.log(props.products);
  

  return (
    <div>
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
      <table className="table table-bordered" style={{background:"#ffffff"}}>
        <thead>
          <tr style={{backgroundColor:"#009DF5", color:"white"}}>
            <th scope="col">#</th>
            <th onClick={() => setStatus(sortTitle, "title")} scope="col">
              Title {setArrow(sortTitle)}
            </th>
            <th onClick={() => setStatus(sortDetail, "detail")} scope="col">
              Detail {setArrow(sortDetail)}
            </th>
            <th onClick={() => setStatus(sortStock, "stock")} scope="col">
              Stock {setArrow(sortStock)}
            </th>
            <th onClick={() => setStatus(sortPrice, "price")} scope="col">
              Price {setArrow(sortPrice)}
            </th>
            <th
              scope="col"
              className={props.isFlag === true ? "d-none d-print-block" : ""}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {props.products
            .filter((item) => {
              return (
                item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                item.detail.toLowerCase().includes(keyword.toLowerCase()) ||
                item.stock == keyword ||
                item.price == keyword
              );
            })
            .map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.detail}</td>
                <td>{item.stock}</td>
                <td>฿{item.price.toLocaleString()}</td>
                <td className={props.isFlag ? "d-none d-print-block" : ""}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/edit-product/${item._id}`}
                  >
                    Edit
                  </Link>
                  |
                  <span
                    onClick={() => props.removeProduct(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    Delete
                  </span>
                  |
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/view-product/${item._id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
