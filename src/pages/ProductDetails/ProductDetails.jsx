import React, { useEffect } from "react";

import products from "../../Products";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { useParams } from "react-router-dom";
function ProductDetails() {

  const { addToCart } = useContext(CartContext); 

  const { id } = useParams();
  const product = products.find((product) => {
    // console.log(p.id === Number(id));
    return product.id === Number(id)
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h2 className="text-center mt-5">المنتج غير موجود</h2>
  }

  return (
    <div className="container mt-5" style={{minHeight: "75%"}}>
      <div className="row align-items-center flex-sm-column-reverse flex-md-column-reverse flex-lg-row ">
        <div className="col-md-6 text-end">
          <h1 className="fw-bold">{product.name}</h1>
          <p className="fs-3 arabic-text">{product.description}</p>
          <p className="fs-4 ">{product.price} جنيه</p>
          <button className="btn btncolr" onClick={() => addToCart(product)}>اضف إلى السلة</button>
        </div>
        <div className="col-md-6 text-start">
          <img className="img-fluid rounded" style={{ maxWidth: "500px", width: "320px" }} src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="mt-5 arabic-text">

        {product.features && product.features.length > 0 && (
          <div>
            <h2>المميزات</h2>
            <ul className="list-group">
              {product.features.map((feature, index) => (
                <li key={index} className="list-group-item">{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {product.uses && product.uses.length > 0 && (
          <div>
            <h2 className="mt-4">الاستخدامات</h2>
            <ul className="list-group">
              {product.uses.map((use, index) => (
                <li key={index} className="list-group-item"> {use} </li>
              ))}
            </ul>
          </div>
        )}

        {product.sideEffects && product.sideEffects.length > 0 && (
          <div>
            <h2 className="mt-4 text-danger">الاضرار الجانبية</h2>
            <ul className="list-group">
              {product.sideEffects.map((effect, index) => (
                <li key={index} className="list-group-item text-danger"> {effect} </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
