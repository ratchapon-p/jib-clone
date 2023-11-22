import React, { useState } from "react";
import logo from "../../assets/logo.png";
import flag from "../../assets/thailand-flag.png";
import "./Header.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const categories = [
    { label: "หมวดหมู่สินค้า", value: "categories" },
    { label: "โน๊ตบุ๊ค", value: "notebook" },
    { label: "โน๊ตบุ๊คโน๊ตบุ๊คโน๊ตบุ๊คโน๊ตบุ๊คโน๊ตบุ๊ค", value: "none" },
  ];

  const maxLabel = Math.max(
    ...categories.map((categories) => categories.label.length)
  );
  const baseWidth = 1;
  const dynamicWidth = baseWidth + maxLabel * 3;

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: dynamicWidth,
    }),
  };

  const onClickHeader = () => {
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} className="jib-logo" onClick={onClickHeader} />
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
          {/* <Select className="select-categories" options={categories}></Select> */}
          <button>
            <MagnifyingGlassIcon className="search-icon" />
          </button>
        </form>
        <div className="userandcart">
          <Link to="/cart" className="header-cart">
            <ShoppingCartIcon className="cart-icon" />
            <p>ตะกร้าสินค้า</p>
          </Link>
          <Link to="/account" className="header-account">
            <UserIcon className="user-icon" />
            <p>บัญชีของฉัน</p>
          </Link>
        </div>
        <div className="flag">
          <img src={flag} />
        </div>
      </div>
    </div>
  );
};

export default Header;
