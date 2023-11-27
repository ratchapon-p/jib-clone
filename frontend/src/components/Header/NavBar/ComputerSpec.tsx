import React,{useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {

    ChevronDownIcon 
  } from "@heroicons/react/20/solid";
import { Link } from 'react-router-dom';




const ComputerSpec = () => {

    
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

    // const handleInnerClickAway = (e) => {
    //   e.stopPropagation(); // Stop the event from propagating to the outer ClickAwayListener
    // };

  
  return (
    <div>
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={`custom-select ${isOpen ? 'open' : ''}`}
        onMouseEnter={handleSelectHover}
        onMouseLeave={handleSelectLeave}
      >
        <p className='select-navbar'>จัดสเปค/คอมประกอบ<ChevronDownIcon className="drop-down" /></p>
        {isOpen && (
          <div className="options-container">
            <Link className="option" to='/pcspec'>จัดสเปคคอมพิวเตอร์</Link>
            <p className="option">จัดอันดับสเปคคอม</p>
          </div>
        )}
      </div>
    </ClickAwayListener>
    </div>
  )
}

export default ComputerSpec;