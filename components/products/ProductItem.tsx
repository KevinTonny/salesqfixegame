import Image from 'next/image';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';

import AddToCart from '@/components/products/AddToCart';
import { Product } from '@/lib/models/ProductModel';
import { convertDocToObj } from '@/lib/utils';

import { Rating } from './Rating';

const ProductItem = async ({ product }: { product: Product }) => {
  const buffer = await fetch(product.image).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className='card mb-4 bg-base-300'>
      <figure>
        <Link
          href={`/product/${product.slug}`}
          className='relative aspect-square h-full w-full'
        >
          <Image
            src={product.image}
            alt={product.name}
            placeholder='blur'
            blurDataURL={base64}
            width={350}
            height={350}
            className='h-full w-full object-cover'
          />
        </Link>
      </figure>
      <div className='card-body'>
        <Link href={`/product/${product.slug}`}>
          <h3 className='card-title line-clamp-1 font-normal'>
            {product.name}
          </h3>
        </Link>
        <Rating value={product.rating} caption={`(${product.name})`} isCard />
        <div className='card-actions flex items-center justify-between'>
          <span className='text-2xl'>${product.price}</span>
        </div>
        <div>
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
  );
};

export default ProductItem;
