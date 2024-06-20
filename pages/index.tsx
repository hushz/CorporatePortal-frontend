import { MainLayout } from '../layouts/MainLayout';
import { NextPage } from 'next';
import { HomeInfo } from '../components/HomeInfo';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeInfo />
    </MainLayout>
  );
};


export default Home;
