import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("products.json");
      const loadedData = await response.json();
      setData(loadedData);
    };
    loadData();
  }, []);
  return (
    <div className="flex mt-8 container mx-auto md:flex-row flex-col-reverse">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 w-3/4">
        {data.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
      <div className="cart-container w-1/4 px-4">asdf</div>
    </div>
  );
};

export default Shop;
