import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProductForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    let product = {
      user_id: localStorage.getItem("user_id"),
      title: data.title,
      detail: data.detail,
      stock: data.stock,
      price: data.price,
    };
    props.isAddProduct(product);
  };
  
  return (
    <div>
      <div className="pb-4">
        <div className="card">
          <div
            className="card-header text-left text-white"
            style={{ backgroundColor: "#009DF5" }}
          >
            <div className="row">
              <div className="col text-left pt-2">
                <h4>Add New Product</h4>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="col-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    ref={register({ required: true })}
                  />
                  {errors.title && errors.title.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required title
                    </p>
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="detail"
                    className="form-control"
                    placeholder="Detail"
                    ref={register({ required: true })}
                  />
                  {errors.detail && errors.detail.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required detail
                    </p>
                  )}
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    placeholder="Stock"
                    ref={register({ required: true })}
                  />
                  {errors.stock && errors.stock.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required stock
                    </p>
                  )}
                </div>
                <div className="col">
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    ref={register({ required: true })}
                  />
                  {errors.price && errors.price.type === "required" && (
                    <p className="text-left" style={{ color: "red" }}>
                      <i className="fas fa-exclamation-triangle"></i>This is
                      required price
                    </p>
                  )}
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
