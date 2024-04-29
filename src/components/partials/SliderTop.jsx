import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        // style={{ ...style, display: "flex", background: "green"}}
        onClick={onClick}>
        <PiCaretRightBold />
    </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            // style={{ ...style, display: "flex", background: "green"}}
            onClick={onClick}>
            <PiCaretLeftBold />
        </div>
    );
  }

const SliderTop = () => {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <>

    </>
  )
}

export default SliderTop