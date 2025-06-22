import { useState } from 'react';
import Layout from './common/Layout';
const Checkout = () => {
  const [paymentmethod, setPaymentmethod] = useState('Stripe');

  const handelpaymentmethod = e => {
    setPaymentmethod(e.target.value);
  };

  return (
    <Layout>
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex py-5" aria-label="Breadcrumb">
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
                    Cart
                  </span>
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
                    Checkout
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-16">
            <div className="">
              <h2 className="text-xl font-bold py-3 border-b">
                Billings Details
              </h2>

              <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-1 font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-1 font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col md:col-span-2">
                    <label
                      htmlFor="address"
                      className="mb-1 font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <textarea
                      name="address"
                      placeholder="Street address"
                      rows="3"
                      className="p-3 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="city"
                      className="mb-1 font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* State */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="state"
                      className="mb-1 font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Zip */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="zip"
                      className="mb-1 font-medium text-gray-700"
                    >
                      Zip
                    </label>
                    <input
                      type="text"
                      name="zip"
                      placeholder="Zip Code"
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="mb-1 font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="">
              <h2 className="text-xl font-bold py-3 border-b">Items</h2>

              <table className="table w-full mt-4 border-b pb-6 border-separate border-spacing-y-4">
                <tbody>
                  <tr className="">
                    <td width={100}>
                      <img
                        src="/five.jpg"
                        width={80}
                        alt="Yellow & White Dress"
                        className="rounded-lg shadow-md"
                      />
                    </td>
                    <td width={600}>
                      <p className="text-lg font-semibold">
                        Yellow & White Dress Combination for Kids
                      </p>
                      <div className="flex items-center pt-3 ps-3 space-x-3">
                        <span className="text-xl font-bold text-gray-700">
                          $10
                        </span>
                        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold">
                          XL
                        </button>
                        <div className="ps-3">
                          <strong> X 1</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-full space-y-4">
                <div className="flex justify-between py-3 border-b text-gray-700">
                  <span>Subtotal</span>
                  <span>$10.00</span>
                </div>

                <div className="flex justify-between py-3 border-b text-gray-700">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>

                <div className="flex justify-between py-3 border-b text-gray-900 font-semibold text-lg">
                  <span>Grand Total</span>
                  <span>$15.00</span>
                </div>
              </div>
              <h2 className="text-md font-bold pt-9 pb-3 border-b">
                Payment Method
              </h2>
              <div className="flex mt-3">
                <input
                  type="radio"
                  value={'stripe'}
                  onChange={handelpaymentmethod}
                  checked={paymentmethod === 'stripe'}
                />
                <label htmlFor="" className="ps-3">
                  Stripe
                </label>

                <input
                  type="radio"
                  value={'COD'}
                  onChange={handelpaymentmethod}
                  checked={paymentmethod === 'COD'}
                  className="ms-3"
                />
                <label htmlFor="" className="ps-3">
                  COD
                </label>
              </div>

              <div className="flex justify-Start py-3 pt-3">
                <button className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
