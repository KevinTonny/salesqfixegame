import { Metadata } from 'next';
import { Suspense } from 'react';


import AutoCarousel from '@/components/AutoCarousel';
import AutoSlider from '@/components/AutoSlider';
import Carousel, { CarouselSkeleton } from '@/components/carousel/carousel';
import Categories from '@/components/categories/Categories';
import Icons from '@/components/icons/Icons';
import ProductItems, {
  ProductItemsSkeleton,
} from '@/components/products/ProductItems';
import ReadMore from '@/components/readMore/ReadMore';
import Text from '@/components/readMore/Text';
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import SectionPromo1 from "@/components/SectionPromo";
import Slider from '@/components/slider/Slider';


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Fullstack Next.js Store',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Fullstack Next.js Store - Server Components, MongoDB, Next Auth, Tailwind, Zustand',
};

const HomePage = () => {
  return (
    <div className='my-8 flex flex-col gap-4 md:gap-16'>
      <div>
        <AutoSlider />
      </div>
      
      <AutoCarousel />

      <Categories />
      <Icons />

      <Suspense
        fallback={<ProductItemsSkeleton qty={8} name='Latest Products' />}
      >
        <ProductItems />
      </Suspense>

      <Suspense fallback={<ProductItemsSkeleton qty={4} name='Top Rated' />}>
        <Slider />
      </Suspense>

      <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
        <SectionHowItWork />
      </div>
      <SectionPromo1 />

      <ReadMore>
        <Text />
      </ReadMore>
    </div>
  );
};

export default HomePage;
