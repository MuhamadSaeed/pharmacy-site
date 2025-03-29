import React, { useState, useContext } from "react";
import products from "../../Products";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext"; 

// ************ improve the pagi tommorow ******************
const Products = () => {
  const [search, setSearch] = useState("");
  const [current, setcurrent] = useState(1);

  const { addToCart } = useContext(CartContext); 

  const countInPage = 9;
  const filteredProducts = products.filter((product) =>{
    // console.log(product.name.includes(search));    
    return product.name.includes(search)
  });
  
  const totalPages = Math.ceil(filteredProducts.length / countInPage);
  const startIndex = (current - 1) * countInPage;
  const endIndex = startIndex + countInPage;
  
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="container mt-4 min-vh-100">

      <div className="d-flex justify-content-center mb-3">
        <input type="text" className="form-control w-50 arabic-text" placeholder="ابحث عن منتج..." value={search}
          onChange={(e) => {setSearch(e.target.value); setcurrent(1);}}/>
      </div>

      <div className="row">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card text-center p-2">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="card-img-top" style={{ maxHeight: "200px", objectFit: "contain" }}/>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="fw-bold">{product.price} جنيه</p>
                  <button className="btn btncolr me-2" onClick={() => addToCart(product)}> إضافة إلى السلة </button>
                  <Link to={`/product/${product.id}`} className="btn btncolr"> عرض التفاصيل </Link>
                </div>
              </div>
            </div>
          ))
        ) : 
        (<p className="text-center w-100">لم يتم العثور على منتجات</p>)}
      </div>

    {/* try make it more simple later */}
    {totalPages > 1 && (
      <div className="mt-3">
        <ul className="pagination justify-content-center">

          {current > 3 && (
            <>
              <li className="page-item">
                <button className="page-link" onClick={() => setcurrent(1)}>1</button>
              </li>
              {current > 4 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
            </>
          )}

          {Array.from({ length: 5 }, (_, i) => Math.max(1, current - 2) + i).filter((page) => page <= totalPages).map((page) => (
              <li key={page} className={`page-item ${current === page ? "active" : ""}`}>
                <button className="page-link" onClick={() => setcurrent(page)}>{page}</button>
              </li>
            ))}

          {current < totalPages - 2 && (
            <>
              {current < totalPages - 3 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
              <li className="page-item">
                <button className="page-link" onClick={() => setcurrent(totalPages)}>{totalPages}</button>
              </li>
            </>
          )}

        </ul>
      </div>
    )}
    </div>
  );
};

export default Products;
