import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TableProducts(props) {

  useEffect(() => {
    if (props.isFlag) {
      let title = props.sortTitle ? false : true;
      let detail = props.sortDetail ? false : true;
      let stock = props.sortStock ? false : true;
      let price = props.sortPrice ? false : true;
      props.setSortTitle(title);
      props.setSortDetail(detail);
      props.setSortStock(stock);
      props.setSortPrice(price);
    }
  }, []);

  const setArrow = (sort) => {
    return sort ? (
      <i className="fas fa-arrow-up"></i>
    ) : (
      <i className="fas fa-arrow-down" style={{ color: "black" }}></i>
    );
  };
 
  return (
    <div>
      <table className="table table-bordered" style={{ background: "#ffffff" }}>
        <thead>
          <tr style={{ backgroundColor: "#009DF5", color: "white" }}>
            <th scope="col">#</th>
            <th
              onClick={() => props.setStatus(props.sortTitle, "title")}
              scope="col"
            >
              Title {setArrow(props.sortTitle)}
            </th>
            <th
              onClick={() => props.setStatus(props.sortDetail, "detail")}
              scope="col"
            >
              Detail {setArrow(props.sortDetail)}
            </th>
            <th
              onClick={() => props.setStatus(props.sortStock, "stock")}
              scope="col"
            >
              Stock {setArrow(props.sortStock)}
            </th>
            <th
              onClick={() => props.setStatus(props.sortPrice, "price")}
              scope="col"
            >
              Price {setArrow(props.sortPrice)}
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
          {props
            .products()
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
