import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {

    ChevronDownIcon 
  } from "@heroicons/react/20/solid";

const Warranty = () => {
        
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
        <p className='select-navbar'>การรับประกัน<ChevronDownIcon className="drop-down"/></p>
        {isOpen && (
          <div className="options-container">
            <p className="option">เช็คประกันสินค้า</p>
            <p className="option">เงื่อนไขการเปลี่ยนสินค้าภายใน 7 วัน</p>
            <p className="option">เช็คสถานะเคลมสินค้า</p>
            <p className="option">เงื่อนไขการรับประกัน</p>
          </div>
        )}
      </div>
    </ClickAwayListener>
    </div>
  )
}

export default Warranty