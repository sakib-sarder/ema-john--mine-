import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-primary px-5">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src="../../../images/Logo.svg" alt="" />
          </a>
        </div>
        <div className="flex text-white gap-6">
            <a href="#">Order </a>
            <a href="#">Order Review</a>
            <a href="#">Manage Inventory</a>
            <a href="#"> Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
