import Image from 'next/image';
import Link from 'next/link';

import Overlay from './Overlay';

const Categories = () => {
  return (
    <div className='grid auto-rows-[300px] grid-cols-2 gap-4 md:auto-rows-[330px] md:grid-cols-4'>
      <Link
        href='/search?category=Games'
        className='group relative col-span-2 row-span-1 overflow-hidden md:row-span-2'
      >
        <Image
          src="/images/banners/1.jpg"
          alt='Collection of Games'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          loading='lazy'
        />
        <Overlay category='Games' />
      </Link>
      <Link
        href='/search?category=Epic Games'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src="/images/banners/3.jpg"
          alt='Collection of pants'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          loading='lazy'
        />
        <Overlay category='Games' />
      </Link>
      <Link
        href='/search?category=Origin'
        className='group relative col-span-2 overflow-hidden'
      >
        <Image
          src="/images/banners/2.jpg"
          alt='Collection of handbags'
          width={500}
          height={500}
          className='h-full w-full object-cover'
          loading='lazy'
        />
        <Overlay category='Games' />
      </Link>
    </div>
  );
};

export default Categories;
