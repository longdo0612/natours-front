import TourList from '../components/TourList';
// import { useSearchParams } from 'react-router-dom';

const TourPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // if (searchParams.get('tour') && searchParams.get('user') && searchParams.get('price')) {
  //   axios.get()
  // }
  return (
    <main className='main'>
      <TourList />
    </main>
  );
};

export default TourPage;
