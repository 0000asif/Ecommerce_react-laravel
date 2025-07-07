import { useContext } from 'react';
import Layout from './../common/Layout';
import { AdminAuthContext } from '../context/AdminAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AdminAuthContext);
  return (
    <Layout>
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold p-5">Dashboard</h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 bg-blue-100 p-4">
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
                </ul>
              </div>
            </div>

            <div className="md:col-span-8 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3  gap-4">
                asif
              </div>
            </div>
          </div>

          <button onClick={logout} className="border p-2 bg-red-300">
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
