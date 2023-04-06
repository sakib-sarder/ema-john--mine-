import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ReviewItem = ({ product, handleDeleteBtn }) => {
    const { id, img, name, price, quantity, shipping } = product;
    const handleQuantity = (event) => {
        console.log(event.target.value);
    }

  return (
    <div>
      <div className="border-r-rose-100 border p-2 flex justify-between items-center mb-2 rounded-lg">
        <div className="inline-flex items-center gap-2">
          <img className="w-24  rounded-lg" src={img} alt="product" />
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="font-medium">
              Shipping Charge:{" "}
              <span className="text-orange-500">${shipping}</span>
            </p>
            <p className="font-medium">
              Price: <span className="text-orange-500">${price}</span>
            </p>
            <p className="font-semibold">
              Quantity: <input onChange={handleQuantity} className="w-8" type="number" value={quantity} />
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleDeleteBtn(id)}
            className="w-12 h-12 rounded-full bg-red-400 "
          >
            <FaTrashAlt className="mx-auto text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
