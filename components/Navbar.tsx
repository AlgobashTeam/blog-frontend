import Link from 'next/link';

import { defaultCategories } from '../configs/layout';

export default function Navbar() {
  const categoriesList = defaultCategories.map((item, index) => (
    <li className="mr-2" key={index.toString()}>
      <Link href={`/categories/${item.value}`}>
        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
          {item.value.toUpperCase()}
        </a>
      </Link>
    </li>
  ));

  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <Link href="/">
            <a className="flex text-white text-base no-underline hover:text-white hover:no-underline">
              <span className="hidden w-0 md:w-auto md:block pl-1">Algobash</span>
            </a>
          </Link>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <Link href="/">
                <a className="inline-block py-2 px-2 text-white no-underline">ALL</a>
              </Link>
            </li>
            {categoriesList}
          </ul>
        </div>
      </div>
    </nav>
  );
}