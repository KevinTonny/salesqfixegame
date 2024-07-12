import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';


import AddToCart from '@/components/products/AddToCart';
import { Rating } from '@/components/products/Rating';
import ReadMore from '@/components/readMore/ReadMore';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  const buffer = await fetch(product.image).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <>
      <div className='my-8'>
        <div className='my-4'>
          <Link href='/' className='btn'>{`<- Back to Products`}</Link>
        </div>
        <div className='grid gap-4 md:grid-cols-4'>
          <div className='relative aspect-square md:col-span-2 p-8'>
            <Image
              src={product.image}
              alt={product.name}
              placeholder='blur'
              blurDataURL={base64}
              width={640}
              height={640}
              sizes='100vw'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='relative aspect-square md:col-span-2 p-8'>
            <ul className='space-y-4'>
              <li>
                <h1 className='text-3xl font-bold'>{product.name}</h1>
              </li>
              <li>
                <Rating
                  value={product.rating}
                  caption={`${product.numReviews} ratings`}
                />
              </li>
              <li>
                <p className='text-xl font-semibold'>Category: {product.category}</p>
              </li>
              <li>
                <div className='divider'></div>
              </li>
            </ul>
            <div className='card mt-3 bg-base-300 shadow-xl md:mt-0'>
              <div className='card-body'>
                <div className='flex justify-between'>
                  <div>Price</div>
                  <div>${product.price}</div>
                </div>
                <div className='mb-2 flex justify-between'>
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                  </div>
                </div>
                {product.countInStock !== 0 && (
                  <div className='card-actions justify-center'>
                    <AddToCart
                      item={{
                        ...convertDocToObj(product),
                        qty: 0,
                        color: '',
                        size: '',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='other'>
        <ul className='flex flex-row gap-8'>
          <li className='basis-1/2'>
            <h1 className='text-2xl font-bold'>Description</h1>
            <ReadMore>
              <p className=''>Description: {product.description}</p>
            </ReadMore>
            
            </li>
            <li className='basis-1/2'>
              <h1 className='font-bold text-2xl'>System Requirement</h1>
              <ReadMore>
                <p className=''>Requirement: {product.requirement}</p>
              </ReadMore>
            </li>
        </ul>
      </div>
    </>
   

  );
};

export default ProductPage;
