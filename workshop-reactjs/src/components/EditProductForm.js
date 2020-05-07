import React, { useState, useEffect } from "react";

export default function EditProductForm(props) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setTitle(props.product.title);
    setDetail(props.product.detail);
    setStock(props.product.stock);
    setPrice(props.product.price);
  }, []);

  const handleEditProduct = (e) => {
    e.preventDefault();
    let dataEdit = {
      user_id: localStorage.getItem("user_id"),
      title: title,
      detail: detail,
      stock: stock,
      price: price,
    };
    props.updateProduct(dataEdit);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header text-left">
          <div className="row">
            <div className="col text-left pt-2">
              <h4>Product</h4>
            </div>
            <div className="col text-right">
              <button className="btn btn-outline-secondary">Back</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleEditProduct}>
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
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
