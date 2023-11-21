import React, { useState } from "react";
import logo from "../../assets/logo.png";
import flag from "../../assets/thailand-flag.png";
import "./Header.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // const searchOption = ["หมวดหมู่สินค้า", "โน๊ตบุ๊ค"];

  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} />
        <form className="search-header" onSubmit={onSearchSubmit}>
          <input
            type="text"
            value={searchItem}
            onChange={onSearchChange}
            placeholder="ค้นหาอะไรดีวันนี้?"
          />
          <select>
            <option>หมวดหมู่สินค้า</option>
            <option>โน๊ตบุ๊ค</option>
            <option>โน๊ตบุ๊คโน๊ตบุ๊คโน๊ตบุ๊คโน๊ตบุ๊คโน๊ตบุ๊ค</option>
          </select>
          <button>
            <MagnifyingGlassIcon className="search-icon" />
          </button>
        </form>
        <div className="header-cart">
          <ShoppingCartIcon className="cart-icon"/>
          <p>ตะกร้าสินค้า</p>
        </div>
        <div className="header-account">
          <UserIcon className="user-icon"/>
          <p>บัญชีของฉัน</p>

        </div>
        <div className="flag">
          <img src={flag} />
        </div>
      </div>
    </div>
  );
};

export default Header;
