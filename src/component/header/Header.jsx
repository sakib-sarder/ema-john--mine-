import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-primary px-5">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img src="../../../images/Logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex text-white gap-6">
            <Link className="hover:text-orange-400 transition delay-100" to="/shop">Shop </Link>
            <Link className="hover:text-orange-400 transition delay-100" to="/orders">Orders</Link>
            <Link className="hover:text-orange-400 transition delay-100" to="/inventory">Manage Inventory</Link>
            <Link className="hover:text-orange-400 transition delay-100" to="/Login"> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
