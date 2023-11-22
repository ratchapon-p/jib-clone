import React from "react";
import verify1 from "../../assets/verify1.jpg";
import verify2 from "../../assets/verify2.jpg";
import delivery from "../../assets/delivery.jpg";
import payment from "../../assets/payment.jpg";
import quer from "../../assets/qrcode.jpg";
import appstore from "../../assets/appstore.jpg";
import playstore from "../../assets/google-play.jpg";
import line from '../../assets/ft-icon-line.jpg'
import fb from '../../assets/ft-icon-facebook.jpg'
import msg from '../../assets/ft-icon-fb-massenger.jpg'
import insta from '../../assets/ft-icon-instagram.jpg'
import youtube from '../../assets/ft-icon-youtube.jpg'
import tiktok from '../../assets/ft-icon-tiktok.jpg'

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-jib">
          <h3>เจไอบี ออนไลน์</h3>
          <div className="footer-title">
            <ul>
              <li>สินค้า</li>
              <li>ข่าวสาร</li>
              <li>เกี่ยวกับเรา</li>
              <li>ติดต่อเรา</li>
              <li>เจไอบี ดีอย่างไร</li>
            </ul>
          </div>
        </div>

        <div className="footer-support">
          <h3>เจไอบี ออนไลน์</h3>
          <div className="footer-title">
            <ul>
              <li>แผนที่สาขา</li>
              <li>ตำแหน่งงานว่าง</li>
              <li>เช็คประกันสินค้า</li>
              <li>นิตยสารออนไลน์ พ.ย.2566</li>
            </ul>
          </div>
        </div>

        <div className="footer-service">
          <h3>เจไอบี ออนไลน์</h3>
          <div className="footer-title">
            <ul>
              <li>วิธีการสั่งซื้อสินค้า</li>
              <li>ตรวจสอบสถานะสินค้า</li>
              <li>วิธีการชำระเงิน</li>
              <li>การเปลี่ยนคืนสินค้า</li>
              <li>การใช้คูปองส่วนลด</li>
            </ul>
          </div>
        </div>

        <div className="footer-qna">
          <h3>เจไอบี ออนไลน์</h3>
          <div className="footer-title">
            <ul>
              <li>
                เลขที่ 21 ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพฯ 10210
              </li>
              <li>เบอร์โทร : 02-017-4444 ทุกวัน 24 ชั่วโมง</li>
              <li>ช่องทางติดต่อ</li>
              <ul className="sub-ul">
                <li>Line ID : @jibonline</li>
                <li>Facebook : JIB Computer Group</li>
                <li>Instagram : jib.online</li>
                <li>Tiktok : jibofficial</li>
                <li>Youtube : Jib Channel</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="footer-verify">
          <h3>เครื่องหมายรับรอง</h3>
          <div className="footer-image">
            <img src={verify1} />
            <img src={verify2} />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="delivery">
          <div className="text-head">
            <div className="line" />
            <h3>จัดส่งสินค้าโดย</h3>
            <div className="line" />
          </div>
          <img src={delivery} className="footer-img"/>
        </div>
        <div className="payment">
          <div className="text-head">
            <div className="line" />
            <h3>ช่องทางการชำระ</h3>
            <div className="line" />
          </div>
          <img src={payment} className="payment-image"/>
        </div>
        <div className="social">
          <div className="text-head">
            <div className="line" />
            <h3>ช่องทางการติดตาม</h3>
            <div className="line" />
          </div>
          <div className="social-icon">
          <img src={fb} className="logo-icon"/>
          <img src={msg} className="logo-icon"/>
          <img src={line} className="logo-icon"/>
          <img src={insta} className="logo-icon"/>
          <img src={youtube} className="logo-icon"/>
          <img src={tiktok} className="logo-icon"/>
          </div>
        </div>
        <div className="download">
          <div className="text-head">
            <div className="line" />
            <h3>ดาวน์โหลดแอพฯ</h3>
            <div className="line" />
          </div>
          <div className="app-download">
            <img src={quer} className="qr-img"/>
            <div className="store">
              <img src={playstore} className="playstr-img"/>
              <img src={appstore} className="appstr-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
