import { useContext } from 'react';
import Layout from './../common/Layout';
import { AdminAuthContext } from '../context/AdminAuth';

const Dashboard = () => {
  const { logout } = useContext(AdminAuthContext);
  return (
    <Layout>
      <h3>Dashboard</h3>
      <button onClick={logout} className="border p-2 bg-red-300">
        Logout
      </button>
    </Layout>
  );
};

export default Dashboard;
