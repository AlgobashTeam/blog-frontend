/* eslint-disable react/no-danger */

import Subscribe from './Subscribe';

interface Props {
  title: string;
  description: string;
  category: string;
  createdAt: string;
  body: string;
}

export default function NewsInner(props: Props) {
  const {
    title,
    description,
    category,
    createdAt,
    body,
  } = props;

  return (
    <>
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          {createdAt}
          {' '}
          <span className="text-gray-900">/</span>
          {' '}
          {category}
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          {title}
        </h1>
      </div>
      <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: 'url("https://source.unsplash.com/collection/1118905/")', height: '75vh' }} />
      {/* Container */}
      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style={{ fontFamily: 'Georgia,serif' }}>
            <p
              className="text-2xl md:text-3xl mb-5"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            {/* / Post Content */}
          </div>
          <Subscribe />
        </div>
      </div>
    </>
  );
}
