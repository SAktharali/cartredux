import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const carts=useSelector(store=>store.cart.items)
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-secondary ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white">Food Cart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-white">Home</Link>
        </li>
        <li>
          <Link to={`/cart/${carts.foodId}`} className="nav-link text-white"><i className="bi bi-cart4"><sup>{carts.length}</sup></i></Link>
        </li>
     </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar