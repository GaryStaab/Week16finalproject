import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;