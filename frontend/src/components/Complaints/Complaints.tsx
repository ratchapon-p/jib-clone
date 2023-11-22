import React from "react";
import "./Complaints.css";

const Complaints = () => {
  return (
    <div className="complaints-main">
      <div className="complain-text">
        <p>ร้องเรียนหรือแนะนำบริการ</p>
      </div>
      <div className="complain-input">
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
          รายละเอียด :{" "}
            <input />
          </span>
        </div>
        <div className="complain-details">
          <span>
          จาก ชื่อ - สกุล :{" "}
            <input />
          </span>
        </div>
        <div className="complain-details">
          <span>
          เบอร์โทรศัพท์ : :{" "}
            <input />
          </span>
        </div>
        <div className="complain-details">
          <span>
          อีเมล์  :{" "}
            <input />
          </span>
        </div>
        <div className="complain-details">
          <span>
           รหัสภาพ :{" "}
            <input />
          </span>
        </div>
        <div className="complain-details">
          <span>
            กรอกรหัสภาพ :{" "}
            <input />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
