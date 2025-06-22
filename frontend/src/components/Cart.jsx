import Layout from './common/Layout';
import { Link } from 'react-router-dom';

const Cart = () => {
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
            </ol>
          </nav>

          <div className="cart p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-3xl font-bold border-b pb-3">Shopping Cart</h2>
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
                    <div className="flex items-center pt-3 space-x-3">
                      <span className="text-xl font-bold text-gray-700">
                        $10
                      </span>
                      <button className="rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold">
                        XL
                      </button>
                    </div>
                  </td>
                  <td valign="middle">
                    <input
                      type="number"
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
                      placeholder="Qty"
                    />
                  </td>
                  <td valign="middle">
                    <button className="text-red-500 hover:text-red-700 transition duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1z" />
                      </svg>
                    </button>
                  </td>
                </tr>
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
                    <div className="flex items-center pt-3 space-x-3">
                      <span className="text-xl font-bold text-gray-700">
                        $10
                      </span>
                      <button className="rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold">
                        XL
                      </button>
                    </div>
                  </td>
                  <td valign="middle">
                    <input
                      type="number"
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
                      placeholder="Qty"
                    />
                  </td>
                  <td valign="middle">
                    <button className="text-red-500 hover:text-red-700 transition duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="grid justify-end pb-5 border-t pt-6">
              <div className="w-full max-w-md space-y-4">
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

                <div className="flex justify-end pt-2">
                  <Link
                    to="/checkout"
                    className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
