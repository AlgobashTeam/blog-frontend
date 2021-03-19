import Link from 'next/link';

import Avatar from './Avatar';

interface Props {
  category: string;
  title: string;
  description: string;
  howLongToRead: number;
  backgroundImage: string;
  url: string;
  size: 'small' | 'medium' | 'large' | 'full' | 'wide';
}

export default function Card(props: Props) {
  const {
    category,
    title,
    description,
    howLongToRead,
    backgroundImage,
    url,
    size,
  } = props;

  const content = (
    <>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link href={url}>
          <a className="flex flex-wrap no-underline hover:no-underline">
            <img alt="blogImage" src={backgroundImage} className="h-64 w-full rounded-t pb-6" />
            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
              {category.toUpperCase()}
            </p>
            <div className="w-full font-bold text-xl text-gray-900 px-6">
              {title}
            </div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {description}
            </p>
          </a>
        </Link>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
          <Avatar />
          <p className="text-gray-600 text-xs md:text-sm">
            {`BACAAN ${howLongToRead} MENIT`}
          </p>
        </div>
      </div>
    </>
  );

  switch (size) {
    case 'full': {
      return (
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
          {content}
        </div>
      );
    }
    case 'large': {
      return (
        <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          {content}
        </div>
      );
    }
    case 'medium': {
      return (
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          {content}
        </div>
      );
    }
    case 'small': {
      return (
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          {content}
        </div>
      );
    }
    case 'wide': {
      return (
        <div className="w-full md:w-1/3 px-2 pb-12">
          <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
            <Link href={url}>
              <a className="no-underline hover:no-underline">
                <img
                  alt="description"
                  src={backgroundImage}
                  className="h-48 w-full rounded-t shadow"
                />
                <div className="p-6 h-auto md:h-48">
                  <p className="text-gray-600 text-xs md:text-sm">
                    {category.toUpperCase()}
                  </p>
                  <div className="font-bold text-xl text-gray-900">
                    {title}
                  </div>
                  <p className="text-gray-800 font-serif text-base mb-5">
                    {description}
                  </p>
                </div>
                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                  <Avatar />
                  <p className="text-gray-600 text-xs md:text-sm">
                    {`BACAAN ${howLongToRead} MENIT`}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}
