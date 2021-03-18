interface Props {
  category: string;
  title: string;
  description: string;
  howLongToRead: number;
  tags: string[];
  backgroundImage: string;
  newsID: number;
}

export default function Headline(props: Props) {
  const {
    category,
    title,
    description,
    howLongToRead,
    tags,
    backgroundImage,
    newsID,
  } = props;

  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <a href={`/${newsID}`} className="flex flex-wrap no-underline hover:no-underline">
        <div className="w-full md:w-2/3 rounded-t">
          <img alt="headlineImage" src={backgroundImage} className="h-full w-full shadow" />
        </div>
        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{category.toUpperCase()}</p>
            <div className="w-full font-bold text-xl text-gray-900 px-6">
              {title}
            </div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {description}
            </p>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <a>{tags.join(' ')}</a>
            <div className="flex items-center justify-between">
              <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p className="text-gray-600 text-xs md:text-sm">
                {`BACAAN ${howLongToRead} MENIT`}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
