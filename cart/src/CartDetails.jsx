import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, decreaseCart, removeFromCart } from './store/cartSlice';
import  toast  from 'react-hot-toast';

const CartDetails = () => {
  const cart = useSelector((state) => state.cart);
const dispatch=useDispatch();

  const handleRemoveClick=(cartItem)=>{
    if(  window.confirm('are you sure you want to remove this item from cart')){
        dispatch(removeFromCart(cartItem))
    toast.success('item removed from cart')
    }
  }

  const decrement = (cartItem) => {
    if (cartItem.quantity > 1) {
      dispatch(decreaseCart(cartItem));
    } else {
      dispatch(removeFromCart(cartItem));
      toast.success('Item removed from cart');
    }
  };

  const increment = (cartItem) => {
      dispatch(addToCart({...cartItem,quantity:1}));
    
  };
  return (
    <div className='container'>
      <h2 className='text-center'>Food Cart</h2>
      {cart.items.length === 0 ? (
        <>
          <p className='text-capitalize fw-bold text-center mt-5'>Your cart is empty</p>
          <div className='d-flex justify-content-center'>
            <span>
              <Link to='/' className='bi bi-arrow-left fs-3 text-blue text-decoration-none'>
                &nbsp; Start Ordering
              </Link>
            </span>
          </div>
        </>
      ) : (
        <div className='table-responsive mt-5'>
          <table className='table table-hover'>
            <thead className='text-center'>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>checkout</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((cartItem) => (
                <tr key={cartItem.foodId} className='text-center'>
                  <td>
                    <div className='d-flex justify-content-start align-items-center'>
                      <img src={cartItem.image} alt={cartItem.name} width={50} className='me-2' />
                      <span>{cartItem.name}</span>
                      <Link className='btn btn-link text-danger ms-1' onClick={()=>handleRemoveClick(cartItem)}>
                        <i className='bi bi-trash3'></i>
                      </Link>
                    </div>
                  </td>
                  <td>&#8377;{cartItem.price}</td>
                  <td>
                    <div className='d-flex justify-content-center align-items-center'>
                      <button className='btn' style={{border: '1px solid black', borderRadius: '50%'}} onClick={()=>decrement(cartItem)}>-</button>
                      <span className='mx-2'>{cartItem.quantity}</span>
                      <button className='btn' style={{border: '1px solid black', borderRadius: '50%'}} onClick={()=>increment(cartItem)}>+</button>
                    </div>
                  </td>
                  <td>&#8377;{(cartItem.price * cartItem.quantity)}</td>
                  <td><Link to={`/cart/${cartItem.foodId }`} className='text-decoration-none'>checkout</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='d-flex justify-content-between align-items-center'>
            <Link to='/' className='btn btn-link text-decoration-none'>
              <i className='bi bi-arrow-left'></i>
              &nbsp; Continue Ordering
            </Link>
            <p className='fw-bold mb-0'>Sub Total: &#8377;{cart.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
