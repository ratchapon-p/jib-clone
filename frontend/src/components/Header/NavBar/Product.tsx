import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {

    ChevronDownIcon 
  } from "@heroicons/react/20/solid";

const Product = () => {
        
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSelectHover = () => {
      setIsOpen(true);
    };
  
    const handleSelectLeave = () => {
      setIsOpen(false);
    };
  
    const handleClickAway = () => {
      setIsOpen(false);
    };
  return (
    <div>
        
      <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={`custom-select ${isOpen ? 'open' : ''}`}
        onMouseEnter={handleSelectHover}
        onMouseLeave={handleSelectLeave}
      >
        <p className='select-navbar'>สินค้า<ChevronDownIcon className="drop-down"/></p>
        {isOpen && (
          <div className="options-container">
            <p className="option">สินค้าทั้งหมด</p>
            <p className="option">กรุงเทพฯ และ ปริมณฑล</p>
            <p className="option">สินค้า 360 องศา</p>
            <p className="option">By Order</p>
            <p className="option">Pre Order</p>
          </div>
        )}
      </div>
    </ClickAwayListener>
    </div>
  )
}

export default Product