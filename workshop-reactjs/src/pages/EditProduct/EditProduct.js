import React, { useState, useEffect } from "react";

import { getAllProducts, editProduct } from "../../api/api";
import EditProductForm from "../../components/EditProductForm";

export default function EditProduct(props) {
  const [product, setProduct] = useState();

  const fetchProduct = async () => {
    await getAllProducts().then((res) => {
      let data = res.data.filter((item) => {
        return item._id === props.match.params.id;
      });
      setProduct(data[0]);
    });
  };

  const updateProduct = async (product) => {
    await editProduct(props.match.params.id, product).then((res)=>{
        if(res.status === "success"){
            props.history.push('/products')
        }
    })
  };
  
  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(props.match.params.id);
  return (
    <div>
      <div className="edit-form pt-4">
        <div className="container">
          <h1>Edit Product</h1>
          <p>Edit your product here</p>
          {product !== undefined && (
            <EditProductForm product={product} updateProduct={updateProduct} />
          )}
        </div>
      </div>
    </div>
  );
}
