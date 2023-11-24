import React from "react";
import "./Complaints.css";
import complainFt from "../../assets/complain-footer.png";
import complainqr from "../../assets/complain-qr.png";
const Complaints = () => {
  return (
    <div className="complain-border">
      <div className="complain-outline">
        <div className="complaints-main">
          <div className="complain-text">
            <p className="complain-text-p">ร้องเรียนหรือแนะนำบริการ</p>
          </div>
          <form className="complain-input">
            <div className="complain-question">
              <span>
                ประเภทคำถาม :{" "}
                <select className="select-complain">
                  <option>ร้องเรียนการสั่งซื้อออนไลน์</option>
                  <option>ร้องเรียนการบริการของสาขา</option>
                  <option>ติดตามการเคลมสินค้า</option>
                  <option>สอบถามรายละเอียดการเคลมสินค้า</option>
                  <option>สอบถามข้อมูลด้านเทคนิค</option>
                  <option>สอบถามรายละเอียดลูกค้าขายส่ง</option>
                  <option>สอบถามราคาและรายละเอียดสินค้า</option>
                  <option>ร้องเรียนเรื่องอื่นๆ</option>

                </select>
              </span>
            </div>
            <div className="complain-details">
              <span className="detail-of-complain">
                รายละเอียด : {" "} 
                  <textarea className="complain-input-details" rows={10} />
              </span>
            </div>
            <div className="complain-details">
              <span>
                จาก ชื่อ - สกุล : <input className="complain-input-all" />
              </span>
            </div>
            <div className="complain-details">
              <span>
                เบอร์โทรศัพท์ : :{" "}
                <input
                  className="complain-input-all"
                  placeholder="0800000000"
                />
              </span>
            </div>
            <div className="complain-details">
              <span>
                อีเมล์ : <input className="complain-input-email" />
              </span>
            </div>
            <div className="complain-details">
              <span>
                รหัสภาพ : <input className="complain-input-all" />
              </span>
            </div>
            <div className="complain-details">
              <span>
                กรอกรหัสภาพ : <input className="complain-input-all" />
              </span>
            </div>
            <div className="submit-column">
              <div className="submit-complain-details">
                <button className="submit-complain-btn">ส่งข้อมูล</button>
              </div>
              <div className="cancel-complain-details">
                <button className="cancel-complain-btn">ยกเลิก</button>
              </div>
            </div>
          </form>
          <div className="complain-qr">
            <p>แนะนำ ติชม และประเมินความพึงพอใจในการใช้บริการ JIB Online</p>
            <img src={complainqr} className="complain-qr-img" />
          </div>
        </div>
      </div>
      <div className="complain-footer-img">
        <img src={complainFt} className="complain-footer" />
      </div>
    </div>
  );
};

export default Complaints;
