import Layout from './../../common/Layout';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuth';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const Show = () => {
  const { logout } = useContext(AdminAuthContext);
  const hadelLogout = () => {
    confirm('Are you want to Logout?') && logout('/admin/login');
  };
  return (
    <Layout>
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold p-5">Dashboard</h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3 bg-blue-100 p-4">
              <div className="shadow-lg p-6">
                <ul className="space-y-2">
                  <li>
                    <Link to={'/admin/category'}>Categories</Link>
                  </li>
                  <li>
                    <Link to={'/admin/brand'}>Brands</Link>
                  </li>
                  <li>
                    <Link to={'brand'}>Brands</Link>
                  </li>
                  <li>
                    <Link to={'brand'}>Brands</Link>
                  </li>
                  <li>
                    <Link to={'brand'}>Brands</Link>
                  </li>
                  <li>
                    <Link to={'brand'}>Brands</Link>
                  </li>
                  <li>
                    <Link to={'brand'}>Brands</Link>
                  </li>
                  <li>
                    <Link to={'brand'}>Brands</Link>
                  </li>
                  <li>
                    <button
                      onClick={hadelLogout}
                      className="border p-2 bg-red-300"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-9 p-4">
              <div className="flex justify-end mb-4">
                <Link className="bg-soft_blue text-white p-2 rounded">
                  Create
                </Link>
              </div>
              <div className="rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">1</td>
                      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span class="inline-block px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button className="text-blue-600 hover:text-blue-900">
                          <BiEdit />
                        </button>
                        <button className="text-red-600 hover:text-blue-900">
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">2</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Jane Smith
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span class="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                          InActive
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button className="text-blue-600 hover:text-blue-900">
                          <BiEdit />
                        </button>
                        <button className="text-red-600 hover:text-blue-900">
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Show;
