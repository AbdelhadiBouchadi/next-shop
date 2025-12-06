import { getMenu } from '@/lib/shopify';
import MobileMenu from './mobile-menu';
import Link from 'next/link';
import { Menu } from '@/lib/shopify/types';
import Search from './search';
import LogoIcon from '../icons/logo';
import CartModal from '@/components/cart/modal';

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-menu');

  return (
    <nav className="flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        {/* Mobile Menu */}
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href={'/'}
            prefetch
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoIcon />
            <div className="ml-2 flex-none text-sm font-medium md:hidden lg:block">
              NextStore
            </div>
          </Link>

          {menu.length > 0 ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.slice(0, 3).map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch
                    className="text-gray-700 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3 ">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
