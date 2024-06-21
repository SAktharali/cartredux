import React, { useState } from 'react';
import cartData from './CartData/cartData'; 
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaShoppingCart } from 'react-icons/fa'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { addToCart } from './store/cartSlice'; 

const Home = () => {
  const carts = useSelector(state => state.cart.items); // Accessing cart items from Redux store
  const dispatch = useDispatch(); 

  const [showMessage, setShowMessage] = useState(false); 
  const [message, setMessage] = useState(''); 
  const [addedItemId, setAddedItemId] = useState(null); 

  const navigate = useNavigate(); 

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    dispatch(addToCart({
      foodId: item.meal_id,
      name: item.name,
      quantity: 1,
      price: item.price,
      image: item.image,
      gst: item.gst, 
      deliveryCharges: item.deliveryCharges, 
      deliveryAddress: item.deliveryAddress,
      contactUs: item.contactUs,
      foodList: item.foodList,
      customerName: item.customerName, 
      customerMobileNo: item.customerMobileNo, 
      modeOfPayment: item.modeOfPayment,
    }));
    setAddedItemId(item.meal_id); 
    setMessage('Item added to cart');
    setShowMessage(true); 
  };

  // Function to handle clicking on the message
  const handleMessageClick = () => {
    navigate(`/cart`); 
  };

  // Function to handle dismissing the message
  const handleDismissClick = () => {
    setShowMessage(false); 
  };

  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {cartData.MealTypes.map(data => (
          <div className="col" key={data.meal_id}>
            <div className="card h-100">
              <img src={data.image} className="card-img-top" alt={data.name} title={data.name} width={100} height={150} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{data.name}</h5>
                <p className="card-text text-capitalize">{data.content}</p>
                <b>Price: &#8377;{data.price}</b>
              </div>
              <button
                onClick={() => handleAddToCart(data)}
                className="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {showMessage && (
        <div
          className="alert bg-black text-white fixed-bottom mb-0 text-center d-flex justify-content-between align-items-center"
          style={{ cursor: 'pointer' }}>
          <span onClick={handleMessageClick} className="flex-grow-1">
            {message}
            &nbsp;
            <span>
              <FaShoppingCart size={20} color="white" /> <sup>{carts.length}</sup>
            </span>
          </span>
          <FaTimes
            onClick={handleDismissClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
