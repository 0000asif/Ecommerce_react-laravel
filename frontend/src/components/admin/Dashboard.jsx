import { useContext } from 'react';
import Layout from './../common/Layout';
import { AdminAuthContext } from '../context/AdminAuth';

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
