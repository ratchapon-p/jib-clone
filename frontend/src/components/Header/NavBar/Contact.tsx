import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {

    ChevronDownIcon 
  } from "@heroicons/react/20/solid";

const Contact = () => {
        
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
        <p className='select-navbar'>ติดต่อเรา<ChevronDownIcon className="drop-down"/></p>
        {isOpen && (
          <div className="options-container">
            <p className="option">เกี่ยวกับเรา</p>
            <p className="option">ลูกค้าองค์กร/ลูกค้าหน่วยงานรัฐบาล</p>
            <p className="option">ร่วมงานกับเรา</p>
            <p className="option">แผนที่สำนักงานใหญ่</p>
            <p className="option">Service Center</p>
          </div>
        )}
      </div>
    </ClickAwayListener>
    </div>
  )
}

export default Contact