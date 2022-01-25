import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css';
import 'react-slideshow-image/dist/styles.css';
import slide1 from './images/slide_1.jpg';
import slide2 from './images/slide_2.jpg';
import slide3 from './images/slide_3.jpg';
import slide4 from './images/slide_4.jpg';

// const fadeImages = [
//   {
//     url: './images/slide_1.jpg',
//   },
//   { url: './images/slide_2.jpg' },
//   { url: './images/slide_3.jpg' },
//   { url: './images/slide_4.jpg' },
// ];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={slide1} alt="first_slide" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={slide2} alt="second_slide" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={slide3} alt="third_slide" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={slide4} alt="fourth_slide" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
