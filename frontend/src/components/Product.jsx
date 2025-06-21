import Layout from './common/Layout';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(4);
  const [activeTab, setActiveTab] = useState('profile');

  const tabList = [
    { key: 'home', label: 'Description', disabled: false },
    { key: 'profile', label: 'Reviews (50)', disabled: false },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <p>
            100% Original Products <br />
            Pay on Delivery might be avilable <br />
            Easy 15 days returns and exchanges
          </p>
        );
      case 'profile':
        return <p>Tab content for Profile</p>;
      case 'contact':
        return <p>Tab content for Contact</p>;
      default:
        return null;
    }
  };

  const handleRating = rate => {
    setRating(rate);
  };
  const images = [
    '/two.jpg',
    '/three.jpg',
    '/four.jpg',
    '/five.jpg',
    '/six.jpg',
    '/seven.jpg',
    '/eight.jpg',
    '/nine.jpg',
  ];
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
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400 "
                  >
                    Shop
                  </a>
                </div>
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
                    Product Details
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 min-h-[750px]">
            <div className="md:col-span-5 bg-blue-100 p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
                {/* Thumbnail Swiper */}
                <div className="col-span-2 h-full overflow-hidden">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    direction="vertical"
                    slidesPerView={6}
                    spaceBetween={10}
                    freeMode={true}
                    watchSlidesProgress={true}
                    loop={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-full"
                  >
                    {images.map((src, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={src}
                          alt={`thumb-${i}`}
                          className="w-full object-cover rounded"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Main Swiper */}
                <div className="col-span-10  h-full">
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-full"
                  >
                    {images.map((src, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={src}
                          alt={`main-${i}`}
                          className="w-full h-full object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 p-4">
              <h2 className="text-3xl font-bold py-3">
                Brand New T-shirt from gulisthan
              </h2>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    size={20}
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl cursor-pointer ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="pt-1 ps-2 text-md text-gray-700">
                  10 Reviews
                </span>
              </div>
              <div className="price font-bold text-2xl py-3">
                $20 <span className="line-through text-gray-400">$25</span>
              </div>
              <div>
                100% Original Products <br />
                Pay on Delivery might be avilable <br />
                Easy 15 days returns and exchanges
              </div>
              <div className=" py-3">
                <strong>Select Size</strong>
                <div className="flex gap-2 pt-3">
                  <button className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-400 active:bg-gray-400">
                    L
                  </button>
                  <button className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-400 active:bg-gray-400">
                    M
                  </button>
                  <button className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-400 active:bg-gray-400">
                    S
                  </button>
                  <button className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-400 active:bg-gray-400">
                    XL
                  </button>
                </div>
              </div>
              <div className="add-to-cart py-4 mb-6">
                <a
                  href="/cart"
                  className="uppercase bg-soft_blue rounded-lg py-2 px-8 text-md text-white"
                >
                  {' '}
                  Add to cart{' '}
                </a>
              </div>
              <hr />
              <div className="sku py-4">
                <strong>
                  SKU: <span className="text-gray-500">FFGGG2</span>
                </strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 pb-8">
            <div className="p-4 md:col-span-12">
              <div className="flex border-b mb-4">
                {tabList.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => !tab.disabled && setActiveTab(tab.key)}
                    className={`py-2 px-4 text-sm font-medium border-b-2 transition-all duration-200
                    ${
                      activeTab === tab.key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-blue-500'
                    } `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="py-4 bg-white">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
