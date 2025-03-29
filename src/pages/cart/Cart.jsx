import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // console.log(cart)
  // console.log(updateQuantity)
  // console.log(removeFromCart)
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return (
    <div className="min-vh-100 container">
    <div className="mt-4 arabic-text">
      <h2 className="mb-3">سلة التسوق</h2>
      {cart.length === 0 ? (
        <p className="text-center">السلة فارغة</p>
      ) : 
      (<div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card text-center p-2">
                <img src={item.image} alt={item.name} className="card-img-top" style={{ maxHeight: "150px", objectFit: "contain" }}/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="fw-bold">{item.price} جنيه</p>
                  <input type="number" value={item.quantity} min="1" className="form-control mb-2" onChange={(e) => updateQuantity(item.id, Number(e.target.value))} />
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>ازالة</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>

    <div className="mt-4">
            <h4 className="text-center">السعر الإجمالي: {total} جنيه</h4>
          </div>
      </ div>

  );
};

export default Cart;
