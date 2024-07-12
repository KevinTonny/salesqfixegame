"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const AutoCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='p-4'>
            <a className='border-none outline-none' href='/origin'>
                <Image src="/images/Seperate/001 - Copia.webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>ORIGIN</p>
            </a>
        </div>
        <div className='p-4'>
            <a className='border-none outline-none' href='/aluguel-de-contas'>
                <Image src="/images/Seperate/001 - Copia (2).webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>JOGOS ONLINE</p>
            </a>
        </div>
        <div className='p-4'>
            <a className='border-none outline-none' href='/epic-games'>
                <Image src="/images/Seperate/001 - Copia (3).webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>Epic Games</p>
            </a>
        </div>
        <div className='p-4'>
            <a className='border-none outline-none' href='/microsoft-store'>
                <Image src="/images/Seperate/001 - Copia (4).webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>MICROSOFT</p>
            </a>
        </div>
        <div className='p-4'>
            <a className='border-none outline-none' href='/uplay'>
                <Image src="/images/Seperate/001 - Copia (5).webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>UBISOFT</p>
            </a>
        </div>
        <div className='p-4'>
            <a className='border-none outline-none' href='/steam'>
                <Image src="/images/Seperate/001.webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>STEAM</p>
            </a>
        </div>
        <div className='p-4'>
            <a className='border-none outline-none' href='/pre-venda'>
                <Image src="/images/Seperate/Untitled-2.webp" width={300} height={300} alt="slider" />
                <p className='text-center mt-3 font-bold'>PRE-VENDA</p>
            </a>
        </div>
      </Slider>
    </div>
  );
}

export default AutoCarousel;
