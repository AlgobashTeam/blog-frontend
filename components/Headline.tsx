import Link from 'next/link';

import Avatar from './Avatar';

interface Props {
  category: string;
  title: string;
  description: string;
  howLongToRead: number;
  backgroundImage: string;
  url: string;
}

export default function Headline(props: Props) {
  const {
    category,
    title,
    description,
    howLongToRead,
    backgroundImage,
    url,
  } = props;

  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <Link href={url}>
        <a className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full md:w-2/3 rounded-t">
            <img alt="headlineImage" src={backgroundImage} className="h-full w-full shadow" />
          </div>
          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                {category.toUpperCase()}
              </p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">
                {title}
              </div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                {description}
              </p>
            </div>
            <div
              className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <Avatar />
                <p className="text-gray-600 text-xs md:text-sm">
                  {`BACAAN ${howLongToRead} MENIT`}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
