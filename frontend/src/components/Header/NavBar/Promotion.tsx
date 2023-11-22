import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {

    ChevronDownIcon 
  } from "@heroicons/react/20/solid";

const Promotion = () => {
        
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
        <p className='select-navbar'>โปรโมชั่น<ChevronDownIcon className="drop-down"/></p>
        {isOpen && (
          <div className="options-container">
            <p className="option">สินค้าลดราคา</p>
            <p className="option">สินค้าผ่อนชำระ 0%</p>
          </div>
        )}
      </div>
    </ClickAwayListener>
    </div>
  )
}

export default Promotion