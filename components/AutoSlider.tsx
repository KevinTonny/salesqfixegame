"use client"

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';


const AutoSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src="/images/banners/1.jpg" alt="Slide 1" className='w-full' width={1200} height={500} />
        </div>
        <div>
          <Image src="/images/banners/2.jpg" alt="Slide 2" className='w-full'  width={1200} height={500} />
        </div>
        <div>
          <Image src="/images/banners/3.jpg" alt="Slide 3" className='w-full'  width={1200} height={500} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoSlider;
