import Link from 'next/link';

import Web from '../layouts/Web';
import Headline from '../components/Headline';
import Facebook from '../components/icons/Facebook';
import { defaultTitle, defaultDescription } from '../configs/layout';
import Card from '../components/Card';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Web>
      <div
        className="w-full m-0 p-0 bg-cover bg-bottom"
        style={{ backgroundImage: 'url("cover.jpg")', height: '60vh', maxHeight: '460px' }}
      >
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <p className="text-white font-extrabold text-3xl md:text-5xl">
            {defaultTitle}
          </p>
          <p className="text-xl md:text-2xl text-gray-500">
            {defaultDescription}
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">

          <nav className="mt-0 w-full">
            <div className="container mx-auto flex items-center">
              <div className="flex w-1/2 pl-4 text-sm">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="mr-2">
                    <a className="inline-block py-2 px-2 text-white no-underline hover:underline">
                      ALL
                    </a>
                  </li>
                  <li className="mr-2">
                    <Link href="/categories/tantangan-koding">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                      >
                        TANTANGAN KODING
                      </a>
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link href="/categories/tutorial">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                      >
                        TUTORIAL
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex w-1/2 justify-end content-center">
                <a
                  className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
                  data-tippy-content="#facebook_id"
                  href="https://www.facebook.com/sharer/sharer.php?u=#"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </nav>
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            <Headline
              title="👋 Welcome fellow Tailwind"
              description="This starter template is an attempt to replicate the default Ghost theme  using Tailwind CSS and vanilla Javascript."
              howLongToRead={1}
              backgroundImage="https://source.unsplash.com/collection/494263/800x600"
              category="programming"
              url="/news/hallo"
            />

            <div className="flex flex-wrap justify-between pt-12 -mx-6">

              <Card
                size="small"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/225/800x600"
                url="/news/halo"
              />

              <Card
                size="small"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/225/800x600"
                url="/news/halo"
              />

              <Card
                size="small"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/225/800x600"
                url="/news/halo"
              />

              <Card
                size="medium"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/3657445/800x600"
                url="/news/halo"
              />

              <Card
                size="medium"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/3657445/800x600"
                url="/news/halo"
              />

              <Card
                size="large"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/3657445/800x600"
                url="/news/halo"
              />

              <Card
                size="small"
                title="Apa Itu Nasi Goreng"
                category="category"
                description="Nasi goreng itu enak sekali, beli yang banyak biar kenyang"
                howLongToRead={1}
                backgroundImage="https://source.unsplash.com/collection/225/800x600"
                url="/news/halo"
              />

            </div>
          </div>

          <Subscribe />
        </div>
      </div>
    </Web>
  );
}
