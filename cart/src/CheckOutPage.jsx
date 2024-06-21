import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CheckoutPage = () => {
  const { foodId } = useParams();
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.foodId === parseInt(foodId))
  );

  if (!item) {
    return <div className='container'><p>Item not found!</p></div>;
  }

  // Format the current date for the order date
  const orderDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  
  // Calculate the total price based on the item price, quantity, delivery charges, and GST
  const totalPrice = item.price * item.quantity + (item.deliveryCharges || 0) + (item.gst || 0);

  return (
    <div className='container'>
      <h2 className='text-center'>Checkout: {item.name}</h2>
      <div className="d-flex justify-content-center">
      <div className='card ' style={{ width: '25rem' }}>
        <img src={item.image} alt={item.name} className='card-img-top' />
        <div className='card-body'>
          <h5 className="card-title fw-bold">Order ID: #00{item.foodId}</h5>
          <p className="card-text">Order Date: {orderDate}</p>
          <p className="card-text">Order Item: {item.name}</p>
          <p className="card-text">Order Item List: {item.foodList}</p>
          <p className="card-text">No Of Quantity: {item.quantity}</p>
          <p className="card-text">Price: &#8377;{item.price}</p>
          <p className="card-text">GST: &#8377;{item.gst || 0}</p>
          <p className="card-text">Delivery Charges: &#8377;{item.deliveryCharges || 0}</p>
          <p className="card-text">Total Price: &#8377;{totalPrice} (gst + delivery charges)</p>
          <p className="card-text text-capitalize">Customer Name: {item.customerName}</p>
          <p className="card-text text-capitalize">Customer Mobile Number: +91 {item.customerMobileNo}</p>
          <p className="card-text text-capitalize">Mode of Payment: {item.modeOfPayment}</p>
          <p className="card-text text-capitalize">Delivery Address: {item.deliveryAddress}</p>
          <p className="card-text text-capitalize">Contact Us: +91 {item.contactUs}</p>
          <button className="btn btn-success w-100">Place Order</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

