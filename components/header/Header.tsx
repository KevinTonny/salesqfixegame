import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Menu from './Menu';
import { SearchBox } from './SearchBox';

const Header = () => {
  return (
    <header>
      <nav className='w-full fixed z-[2000]  bg-base-300'>
        <div className='container'><div className='navbar justify-between'>
          <div>
            <label htmlFor='my-drawer' className='btn btn-square btn-ghost'>
              <AlignJustify />
            </label>
            <Link
              href='/'
              className='ml-2 text-base font-semibold sm:ml-4 sm:text-lg'
            >
              <Image src="/images/logo.webp" alt="logo" width={190} height={50} />
            </Link>
          </div>
          <Menu />
        </div>
        <div className='block bg-base-300 pb-3 text-center md:hidden'>
          <SearchBox />
        </div></div>
        
      </nav>
      <div className='mt-[111px] bg-base-300 border-t border-slate-300'>
        <ul className="flex justify-center gap-8 py-4">
          <li className="hover:text-green-400">
            <a href="/epic-games">Epic Games</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/aluguel-de-contas">Jogos Online PC</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/microsoft-store">Microsoft Store</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/origin">Origin</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/pre-Venda">Pre-Venda</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/steam">Steam</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/uplay">Ubsoft</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
