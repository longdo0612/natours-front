import TourCard from '../TourCard';
import { useGetAllToursQuery } from '../../features/tours/tourApiSlice';

const TourList = () => {
  const {
    data: tours,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllToursQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = tours.data.map((tour) => <TourCard tour={tour} key={tour.id} />);
  } else if (isError) {
    content = error;
  }
  return <div className='card-container'>{content}</div>;
};

export default TourList;
