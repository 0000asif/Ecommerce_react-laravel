const LatestProducts = () => {
  const productpriceclass =
    'mb-2text-lg font-semibold hover:text-soft_blue transition-all duration-300 ease-in-out';
  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold p-5">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg relative overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/five.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Black Jacket for Men
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/two.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Blazer for a Young Man for best Attraction best collection
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/three.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Blue Shirt for only Handsome man Men
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/four.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Stylist Goal gola jama blue not fully
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/five.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Black Jacket for Men
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/six.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                White t-shirt akdom fola mal
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/seven.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Tay son for Men
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/eight.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                This is a blue ray into here for Men
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/ten.jpg"
                alt="Card 1"
                className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-4">
              <a className={productpriceclass} href="/">
                Blue check shirt in brand new
              </a>
              <p className="text-black-600">
                50$
                <span className="line-through text-gray-500 ml-2">60$</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
