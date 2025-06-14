import FeatureProducts from './common/FeatureProducts';
import LatestProducts from './common/LatestProducts';
import Hero from './common/Hero';
import Layout from './common/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeatureProducts />
        <LatestProducts />
      </Layout>
    </>
  );
};

export default Home;
