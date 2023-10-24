import React from 'react';
import './Cart.css'

const Cart = ({ cartItems}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
  return (
    <div className="cart">
      <h2 className='text-center'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-center'>Your cart is empty</p>
      ) : (
        <table className='table table-light table-hover m-0'>
          <tbody>
              {cartItems.map((item,index) =>{
              return(
                  <tr key={index}>
                    <td>
                      <img src={item.image} style={{height:'5rem'}} alt=""/>
                    </td>
                    <td>{item.name}</td>
                    <td>₹ {item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                </tr>
              )
              })}
            </tbody>
        </table>
      )}
      <h3 className='text-center'>Total= ₹ {totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
