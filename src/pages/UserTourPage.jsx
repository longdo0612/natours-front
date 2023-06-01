import TourCard from '../components/TourCard';
import { useGetAllBookedToursQuery } from '../features/booking/bookingApi';

const UserTourPage = () => {
  const {
    data: tours,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllBookedToursQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = tours.data.map((tour) => <TourCard tour={tour} key={tour.id} />);
  } else if (isError) {
    content = error;
  }
  return (
    <main className='main'>
      <div className='card-container'>{content}</div>
    </main>
  );
};

export default UserTourPage;
