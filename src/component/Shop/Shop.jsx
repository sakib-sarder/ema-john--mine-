import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import SideBar from "../SideBar/SideBar";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Shop = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("products.json");
      const loadedData = await response.json();
      setData(loadedData);
    };
    loadData();
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = data.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [data]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="flex mt-8 container mx-auto md:flex-row flex-col-reverse relative">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 w-3/4">
        {data.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container w-1/4 px-4 mx-4 rounded-lg bg-orange-400 h-[100vh]  sticky top-0">
        <SideBar cart={cart}>
          <Link className="bg-yellow-500 rounded-lg" to="/orders">
            <button className=" mx-auto rounded-md py-2 text-lg flex justify-center items-center gap-3">
              <span>Review Orders</span>
              <FaArrowRight className="text-xl" />
            </button>
          </Link>
        </SideBar>
      </div>
    </div>
  );
};

export default Shop;
