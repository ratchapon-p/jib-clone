import React, { useEffect, useState, useRef } from "react";
import "./SlideShow.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

interface SlideShowProps {
  images: string[];
  interval: number;
  height?: number;
}

const SlideShow: React.FC<SlideShowProps> = ({ images, interval, height }) => {
  const [index, setIndex] = useState(0);

  return (
      <Carousel interval={interval}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} className="d-block w-100" style={{height:height}}/>
          </Carousel.Item>
        ))}
      </Carousel>
  );
};

export default SlideShow;
