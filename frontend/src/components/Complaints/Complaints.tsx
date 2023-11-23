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
            <p>ร้องเรียนหรือแนะนำบริการ</p>
          </div>
          <form className="complain-input">
            <div className="complain-question">
              <span>
                ประเภทคำถาม :{" "}
                <select>
                  <option>ร้องเรียนการสั่งซื้อออนไลน์</option>
                </select>
              </span>
            </div>
            <div className="complain-details">
              <span>
                รายละเอียด : <input className="complain-input-details" />
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
            <div>
              <div className="complain-details">
                <button>ส่งข้อมูล</button>
              </div>
              <div className="complain-details">
                <button>ยกเลิก</button>
              </div>
            </div>
          </form>
          <div className="complain-qr">
            <p>แนะนำ ติชม และประเมินความพึงพอใจในการใช้บริการ JIB Online</p>
            <img src={complainqr} className="complain-qr-img" />
          </div>
        </div>
      </div>
      <div className="footer-img">
        <img src={complainFt} className="complain-footer" />
      </div>
    </div>
  );
};

export default Complaints;
