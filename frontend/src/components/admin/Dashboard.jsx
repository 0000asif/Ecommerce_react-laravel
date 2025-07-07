import { useContext } from 'react';
import Layout from './../common/Layout';
import { AdminAuthContext } from '../context/AdminAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const { logout } = useContext(AdminAuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout!',
    }).then(result => {
      if (result.isConfirmed) {
        logout();
        Swal.fire(
          'Logged out!',
          'You have been successfully logged out.',
          'success'
        );  
      }
    });
  };
  return (
    <Layout>
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold p-5">Dashboard</h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 bg-blue-100 p-4">
              <div className="shadow-lg p-6">
                <ul className="space-y-2">
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/category'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Category
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/brand'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Brands
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/unit'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Units
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/color'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Colors
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/product'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/order'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Orders
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/user'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Users
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/shiping'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Shipping
                    </Link>
                  </li>
                  <li className="border-b-2 p-2">
                    <Link
                      to={'/dashboard/change-password'}
                      className="text-black hover:text-soft_blue transition-colors duration-200"
                    >
                      Change Password
                    </Link>
                  </li>
                  <li className=" p-2">
                    <button
                      onClick={handleLogout}
                      className="border py-2 px-4 bg-red-300 rounded"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-8 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3  gap-4">
                asif
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
