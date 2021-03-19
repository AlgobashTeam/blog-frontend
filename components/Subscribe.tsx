export default function Subscribe() {
  return (
    <>
      <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
        <h2 className="font-bold break-normal text-2xl md:text-4xl">
          Ingin memenangkan tantangan koding?
        </h2>
        <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
          Gabung Algobash dan Menangkan Hadiahnya
        </h3>
        <div className="w-full text-center pt-4">
          <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.algobash.com"
              type="button"
              className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
            >
              Bergabung
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center font-sans p-8 md:p-24">
        <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
        <div className="flex-1">
          <p className="text-base font-bold text-base md:text-xl leading-none">Algobash - Koding Tes pertama dan satu-satunya di Indonesia</p>
          <p className="text-gray-600 text-xs md:text-base">
            Ingin perusahaan Anda menggunakan Algobash?
          </p>
        </div>
        <div className="justify-end">
          <a
            href="https://algobash.com/#sec-contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>

    </>
  );
}
