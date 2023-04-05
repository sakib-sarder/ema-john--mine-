import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem.jsx/ReviewItem";
import { removeFromDb } from "../../../utilities/fakedb";
import { MdPayment } from "react-icons/md";

const Orders = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(products);

  const handleDeleteBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="flex gap-4 container mx-auto mt-8">
      <div className="w-2/3 overflow-y-scroll h-[80vh]">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
          >
            Place Order
          </ReviewItem>
        ))}
      </div>
      <div className="w-1/3 bg-orange-400 rounded-lg px-8 h-[80vh]">
        <SideBar cart={cart}>
          <Link to="/payment" className="bg-yellow-500 rounded-lg">
            <button className="bg-yellow-500 rounded-md py-2 text-lg flex justify-center items-center gap-3 mx-auto">
              <span>Proceed Checkout</span>
              <MdPayment className="text-2xl" />
            </button>
          </Link>
        </SideBar>
      </div>
    </div>
  );
};

export default Orders;
