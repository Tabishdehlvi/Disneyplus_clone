import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true 
    }

  return (
    <Carousel {...settings}>
        <Wrap>
          <img src='/images/slider-scale.jpg' />
       </Wrap>
       <Wrap>
          <img src='/images/slider-badag.jpg' />
       </Wrap>
       <Wrap>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83363D03F4F637E001C0FF3BE7AE5B6461E498E1673A2EB944276D6399263C01/scale?width=1440&aspectRatio=3.91&format=jpeg" />
       </Wrap>
       <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg" />
       </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider) `
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 150, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div `
    cursor: pointer;

    img {
        width: 99%;
        height: 100%;
        border: 4px solid transparent;
        // height: 500px;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0  / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`