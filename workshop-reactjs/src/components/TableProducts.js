import React, { useState } from "react";

export default function TableProducts(props) {
  const [products, setProducts] = useState([]);

  console.log(props.products);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Detail</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.detail}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>Edit | Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
