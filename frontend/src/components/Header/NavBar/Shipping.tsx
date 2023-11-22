import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {

    ChevronDownIcon 
  } from "@heroicons/react/20/solid";

const Shipping = () => {
        
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
        <p className='select-navbar'>ตรวจสอบการนำส่ง<ChevronDownIcon className="drop-down"/></p>
        {isOpen && (
          <div className="options-container">
            <p className="option">ตรวจสอบส่งสินค้า Kerry</p>
            <p className="option">ตรวจสอบส่งสินค้า Mr.Bee</p>
            <p className="option">ตรวจสอบส่งสินค้า Teleport</p>
            <p className="option">ตรวจสอบส่งสินค้า DHL</p>
          </div>
        )}
      </div>
    </ClickAwayListener>
    </div>
  )
}

export default Shipping