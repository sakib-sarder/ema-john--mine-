import React from "react";
import { FaTrashAlt} from "react-icons/fa";
const SideBar = ({ cart, children }) => {
  let totalPrice = 0;
  let quantity = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    quantity = quantity + product.quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = parseFloat((totalPrice * 0.07).toFixed(2));
  return (
    <>
      <div className="text-white">
        <h1 className="mt-8 text-2xl text-center font-bold underline">
          Order Summary
        </h1>
        <div className="my-8 flex flex-col gap-4 ">
          <p>Selected Items:{quantity}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge:{totalShipping}</p>
          <p>Tax: ${tax}</p>
          <h3 className="text-xl font-semibold">
            Grand Total: ${(totalPrice + tax + totalShipping).toFixed(2)}
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-red-600 rounded-md py-2 text-lg flex justify-center items-center gap-3">
            <span>Clear Cart</span>
            <FaTrashAlt className="text-xl" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default SideBar;
