import Layout from './common/Layout';

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
                    Shop
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          {/* <div className="cart">
            <h2 className="text-3xl font-bold border-b  w-full">Cart</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td width={100}>
                    <img src="/five.jpg" width={80} alt="img" />
                  </td>
                  <td width={600}>
                    <p>Yello & white Derss Combaination for the kids</p>
                    <div className="flex items-center pt-3">
                      <span>$10</span>
                      <div className="ps-3">
                        <button className="rounded-md bg-gray-100">XL</button>
                      </div>
                    </div>
                  </td>
                  <td valign="middle">
                    <input
                      type="number"
                      class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      style={{ width: '100px' }}
                    />
                  </td>
                  <td valign="middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cart">
            <h2 className="text-3xl font-bold border-b pb-2 mb-4 w-full">
              Cart
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <tbody>
                  <tr className="border-b last:border-0">
                    <td className="block p-4 align-top">
                      <img
                        src="/nine.jpg"
                        alt="Image not found!"
                        onError={e => {
                          e.target.src = 'https://via.placeholder.com/150'; // Fallback placeholder image
                          e.target.alt = 'Error loading image';
                        }}
                        className="w-24 h-24 object-cover border"
                      />
                    </td>

                    <td className="p-4 align-top w-full">
                      <p className="font-medium text-gray-800">
                        Yellow & White Dress Combination for Kids
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <span className="text-lg font-semibold text-gray-700">
                          $10
                        </span>
                        <button className="rounded-md bg-gray-100 px-3 py-1 text-sm">
                          XL
                        </button>
                      </div>
                    </td>

                    <td className="p-4 align-middle">
                      <input
                        type="number"
                        className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        min={1}
                        defaultValue={1}
                      />
                    </td>

                    <td className="p-4 align-middle text-red-500 cursor-pointer hover:text-red-700 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
          <div className="cart p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-3xl font-bold border-b pb-3">Shopping Cart</h2>
            <table className="table w-full mt-4">
              <tbody>
                <tr className="border-b">
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
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
