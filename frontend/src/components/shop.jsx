import { Link } from 'react-router-dom';
import Layout from './common/Layout';
const Shop = () => {
  const productpriceclass =
    'mb-2text-lg font-semibold hover:text-soft_blue transition-all duration-300 ease-in-out';

  return (
    <Layout>
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex p-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400 "
                >
                  Home
                </a>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Shop
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 bg-blue-100 p-4">
              <div className="shadow-lg p-6">
                <h3 className="text-xl font-bold pb-2">Categories</h3>

                <ul className="space-y-2">
                  <li>
                    <input type="checkbox" /> {'Men'}
                  </li>
                  <li>
                    <input type="checkbox" /> {'Woman'}
                  </li>
                  <li>
                    <input type="checkbox" /> {'Kids'}
                  </li>
                </ul>
              </div>

              <div className="shadow-lg p-6">
                <h3 className="text-xl font-bold pb-2">Brands</h3>

                <ul className="space-y-2">
                  <li>
                    <input type="checkbox" /> {'Puma'}
                  </li>
                  <li>
                    <input type="checkbox" /> {'Apex'}
                  </li>
                  <li>
                    <input type="checkbox" /> {'Bata'}
                  </li>
                  <li>
                    <input type="checkbox" /> {'Levis'}
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-8 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3  gap-4">
                <div className="bg-white shadow-md rounded-lg relative overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src="/five.jpg"
                      alt="Card 1"
                      className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <Link to="/product" className={productpriceclass}>
                      Black Jacket for Men
                    </Link>
                    <p className="text-black-600">
                      50$
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
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
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src="/nine.jpg"
                      alt="Card 1"
                      className="w-full h-[400px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <a className={productpriceclass} href="/">
                      Stylist Men Shit and this watch here
                    </a>
                    <p className="text-black-600">
                      50$
                      <span className="line-through text-gray-500 ml-2">
                        60$
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
