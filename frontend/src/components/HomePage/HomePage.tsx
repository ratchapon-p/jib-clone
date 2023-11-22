import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import SlideShow from "./slideShow/SlideShow";
import image1 from "../../assets/HomePage/slideImage/slideImage1.png";
import image2 from "../../assets/HomePage/slideImage/slideImage2.png";
import image3 from "../../assets/HomePage/slideImage/slideImage3.png";
import image4 from "../../assets/HomePage/slideImage/slideImage4.png";
import image5 from "../../assets/HomePage/slideImage/slideImage5.png";
import image6 from "../../assets/HomePage/slideImage/slideImage6.png";
import image7 from "../../assets/HomePage/slideImage/slideImage7.png";
import image8 from "../../assets/HomePage/slideImage/slideImage8.png";
import image9 from "../../assets/HomePage/slideImage/slideImage9.png";

import categoryImage1 from "../../assets/HomePage/categoryImage/category1.png";
import categoryImage2 from "../../assets/HomePage/categoryImage/category2.png";
import categoryImage3 from "../../assets/HomePage/categoryImage/category3.png";
import categoryImage4 from "../../assets/HomePage/categoryImage/category4.png";
import categoryImage5 from "../../assets/HomePage/categoryImage/category5.png";
import categoryImage6 from "../../assets/HomePage/categoryImage/category6.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Drawer from "./Drawer/Drawer";

// import { images } from "./utils/IMAGES";

const HomePage = () => {
  const images1 = [image1, image2, image3];
  const images2 = [image4, image5];
  const images3 = [image6, image7];
  const images4 = [image8, image9];
  const categoryImages = [
    categoryImage1,
    categoryImage2,
    categoryImage3,
    categoryImage4,
    categoryImage5,
    categoryImage6,
  ];
  const drawerList = [
    {
      APPLE_PRODUCTS: [
        { MAC: ["Apple MacBook Air", "Apple Macbook Pro", "Apple IMac"] },
        { IPad: ["IPadPro", "IPad Air", "IPad"] },
        { IPhone: ["IPhone14", "IPhone15", "IPhone14 Plus"] },
      ],
    },
    {
      โน้ตบุ๊ค: [
        { โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] },
        { โน้ตบุ๊คเกมมิ่ง: ["Acer", "Alienware", "Asus"] },
        { โน้ตบุ๊คอัลตร้าติน: ["Acer", "Asus", "Dell"] },
      ],
    },
    {
      โน้ตบุ๊ค: [{ โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] }],
    },
    {
      โน้ตบุ๊ค: [{ โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] }],
    },
    {
      โน้ตบุ๊ค: [{ โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] }],
    },
    {
      โน้ตบุ๊ค: [{ โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] }],
    },
    {
      โน้ตบุ๊ค: [{ โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] }],
    },
    {
      โน้ตบุ๊ค: [{ โน้ตบุ๊ค: ["Acer", "Asus", "Dell"] }],
    },
  ];
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} className="p-1">
            <Drawer drawerList={drawerList} />
          </Col>

          <Col xs={5} className="p-1">
            <SlideShow images={images1} interval={5000} />
          </Col>
          <Col xs={3} className="p-1">
            <SlideShow images={images2} interval={5000} />
          </Col>
          <Col xs={2} className="p-1">
            <Col xs={12}>
              <SlideShow images={images3} interval={5000} height={230} />
            </Col>
            <Col xs={12}>
              <SlideShow images={images3} interval={5000} height={230} />
            </Col>
          </Col>
          {/* <Col xs={9}></Col>
          <Col xs={3}>
            <SlideShow images={images3} interval={5000} height={250} />
          </Col> */}
        </Row>
        <Row>
          {categoryImages.map((image, index) => (
            <Col xs={2} className="image-category">
              <img src={image}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
