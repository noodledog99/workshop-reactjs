import React, { useState } from "react";

export default function AddProductForm(props) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    let product = {
      user_id: localStorage.getItem("user_id"),
      title: title,
      detail: detail,
      stock: stock,
      price: price,
    };
    props.isAddProduct(product);
    
  };

  const reset = () => {
    setTitle("");
    setDetail("");
    setStock(0);
    setPrice(0);
  };

  return (
    <div>
      <div className="pb-4">
        <div className="card">
          <div className="card-header text-left text-white" style={{backgroundColor:"#FF5C53"}}>
            <div className="row">
              <div className="col text-left pt-2">
                <h4>Add New Product</h4>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleAddProduct}>
              <div className="form-row">
                <div className="col-3">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    className="form-control"
                    placeholder="Detail"
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="form-control"
                    placeholder="Stock"
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Price"
                  />
                </div>
                <div className="col-12 pt-4 text-left">
                  <button className="btn btn-outline-success">
                    + Add Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
