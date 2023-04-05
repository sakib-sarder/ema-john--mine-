import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

const Products = ({ product }) => {
  const { id, img, name, price, seller, ratings } = product;
  return (
    <div>
      <div className="card border p-2 h-full flex">
        <img className="rounded-lg" src={img} alt="product" />
        <div className="my-2">
          <h1 className="font-semibold">{name}</h1>
          <p className="font-medium">Price: ${price}</p>
          <div className="mt-4">
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
          </div>
        </div>
        <button className="btn btn-error mt-auto flex gap-2"><span>Add To Cart</span> <FaShoppingCart className="text-lg"/></button>
      </div>
    </div>
  );
};

export default Products;
