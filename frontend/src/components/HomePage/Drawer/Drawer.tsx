// @ts-nocheck
import React from "react";
import "../Drawer/Drawer.css";

const Drawer = ({ drawerList }) => {
  return (
    <div>
      <div className="drawer-header">หมวดหมู่สินค้า</div>
      <div className="drawer">
        {drawerList.map((category, index) => (
          <div className="drawer-item">{Object.keys(category)}</div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
