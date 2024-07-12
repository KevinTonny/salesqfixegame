import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel as SCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import productService from '@/lib/services/productService';
import { delay } from '@/lib/utils';

const Carousel = async () => {
  await delay(3000);
  const featuredProducts = await productService.getFeatured();

  return (
    <SCarousel opts={{ loop: true }}>
      <CarouselContent>
        <div className='w-full flex overflow-hidden rounded-lg'>
          <Image
            src={`/images/banners/1.png`}
            className='h-[304px] w-full object-cover lg:h-[536px]'
            width={1500}
            height={300}
            alt={"banner"}
            sizes='(max-width: 1500px) 100vw, 1500px'
            priority
          />
          <Image
            src={`/images/banners/1.png`}
            className='h-[304px] w-full object-cover lg:h-[536px]'
            width={1500}
            height={300}
            alt={"banner"}
            sizes='(max-width: 1500px) 100vw, 1500px'
            priority
          />
        </div>

      </CarouselContent>
      <CarouselPrevious className='absolute left-4 top-1/2' />
      <CarouselNext className='absolute right-4 top-1/2' />
    </SCarousel>
  );
};

export default Carousel;

export const CarouselSkeleton = () => {
  return <div className='skeleton h-[304px] w-full rounded-lg lg:h-[536px]' />;
};
