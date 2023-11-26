import React from "react";
import "./Pcspec.css";
import { Link } from "react-router-dom";
import cpuIcon from '../../assets/Pcspec/cpu-ico.png';
import MBIcon from '../../assets/Pcspec/mainboard-ico.png';
import VGAIcon from '../../assets/Pcspec/vga-ico.png';
import MEMIcon from '../../assets/Pcspec/memory-ico.png';
import HDDIcon from '../../assets/Pcspec/hdd-ico.png';
import SSD1Icon from '../../assets/Pcspec/ssd1-ico.png';
import SSD2Icon from '../../assets/Pcspec/ssd2-ico.png';
import CASEIcon from '../../assets/Pcspec/case-ico.png';
import PSUIcon from '../../assets/Pcspec/psu-ico.png';
import COOLIcon from '../../assets/Pcspec/cpu-cool-ico.png';
import LIQIcon from '../../assets/Pcspec/cpu-lq-ico.png';
import MonitorIcon from '../../assets/Pcspec/monitor-ico.png';
import KeyboardIcon from '../../assets/Pcspec/keyboard-ico.png';
import MouseIcon from '../../assets/Pcspec/mouse-ico.png';
import {TrophyIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Pcspec = () => {
  return (
    <div className="pcspec-main">
      <div className="pcspec-link-page">
        <Link className="pcspec-link-page-a" to={'/'} >หน้าแรก </Link>

        <p className="pcspec-link-page-p">/ จัดสเปค</p>
      </div>
      <div className="pcspec-main-item">
        
      <div className="pcspec-choose-item">
        <div className="choose-spec-text"><h4>เลือกสเปคที่ท่านต้องการ</h4></div>
        <div className="choose-spec-unit">
            <img src={cpuIcon} className="pcspec-cpu-icon"/>
            <p className="choose-spec-text-p">CPU</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={MBIcon} className="pcspec-mainboard-icon"/>
            <p className="choose-spec-text-p">Mainboard</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={VGAIcon} className="pcspec-vga-icon"/>
            <p className="choose-spec-text-p">VGA Card</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={MEMIcon} className="pcspec-ram-icon"/>
            <p className="choose-spec-text-p">Memory</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={HDDIcon} className="pcspec-hdd-icon"/>
            <p className="choose-spec-text-p">Harddisk</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={SSD1Icon} className="pcspec-ssd1-icon"/>
            <p className="choose-spec-text-p">Solid State Drive</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={SSD2Icon} className="pcspec-ssd2-icon"/>
            <p className="choose-spec-text-p">M.2</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={CASEIcon} className="pcspec-case-icon"/>
            <p className="choose-spec-text-p">Case</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={PSUIcon} className="pcspec-psu-icon"/>
            <p className="choose-spec-text-p">Power Supply</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={COOLIcon} className="pcspec-cooler-icon"/>
            <p className="choose-spec-text-p">CPU Cooler</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={LIQIcon} className="pcspec-cooler-icon"/>
            <p className="choose-spec-text-p">CPU Liquid Cooler</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={MonitorIcon} className="pcspec-monitor-icon"/>
            <p className="choose-spec-text-p">Monitor</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={KeyboardIcon} className="pcspec-kb-icon"/>
            <p className="choose-spec-text-p">Keyboard</p>
            <div></div>
        </div>
        <div className="choose-spec-unit">
            <img src={MouseIcon} className="pcspec-mouse-icon"/>
            <p className="choose-spec-text-p">Mouse</p>
            <div></div>
        </div>

        <div className="submit-create-pcspec"><button className="create-pcspec">สร้างชุดสเปค</button></div>
      </div>
      <div className="pcspec-item-list">
        <div className="pcspec-header-item">
        <div className="pcspec-search-tab">
          <button className="link-to-ranking"><TrophyIcon className="ranking-icon"/> จัดอันดับสเปคคอม </button>
          <div className="pcspec-searh-item"><MagnifyingGlassIcon className="search-pcspec-icon"/><input className="search-pcspec-input"/><button className="search-pcspec-btn">ค้นหา</button></div>
        </div>

        <div className="pcspec-filetr-tab">
          
        </div>

        </div>




      </div>
      </div>
    </div>
  );
};

export default Pcspec;
