import React, { useState, useEffect } from 'react'
import "./allCatPro.css"
import products from "../../Products";
import { useParams, Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function AllCatPro() {
  const [search, setsearch] = useState("");

  const { category } = useParams();

  const { addToCart } = useContext(CartContext);

  const filtPros = products.filter((pro) =>pro.category === category)
  const filtProsCat = filtPros.filter((product) =>product.name.includes(search))

// make sure if the products doesnt chnage 
// 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div className="d-flex justify-content-center arabic-text mt-3">
    <input type="search" className="form-control le me-2" placeholder="ابحث عن منتج" style={{ width: "650px" }} value={search} onChange={(e) => {setsearch(e.target.value)}}/>
    </div>
        <div>
          <div className="container arabic-text min-vh-100 mt-4">
          <h1 className="text-center">{category}</h1>
          <div className="row">
            {filtProsCat.length > 0 ? (
              filtProsCat.map((product) => (
                <div key={product.id} className=" col-md-4 mb-3">
                  <div className="card p-2 text-center">
                    <Link to={`/product/${product.id}`} className='m-auto'>
                      <img src={product.image} alt={product.name} style={{maxHeight: "250px", maxWidth: "250px"}} className="card-img-top" />
                    </Link>
                      <h5 className="mt-2">{product.name}</h5>
                      <p>{product.price} جنيه</p>
                      <div className='d-flex '>
                        <button className="btn btncolr m-auto mb-2 w-20" onClick={() => addToCart(product)}>اضاف الى السلة </button>
                        <Link to={`/product/${product.id}`} className="btn btncolr w-20 m-auto">عرض التفاصيل</Link>
                    </div>
                  </div>
                </div>
              ))
            ) 
            : (<p className="text-center">لم يتم العثور على منتجات في هذه الفئة</p>)}
          </div>
          <div className="text-center mt-3">
            <Link to="/" className="btn btncolr">العودة الى الصفحة الرئيسية</Link>
          </div>
        </div>
        </div>
    </>
  )
}

export default AllCatPro