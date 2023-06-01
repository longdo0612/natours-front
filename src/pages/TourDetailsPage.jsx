import { useParams } from 'react-router-dom';
import { useGetTourBySlugQuery } from '../features/tours/tourApiSlice';
import TourDetails from '../components/TourDetails';

const TourDetailsPage = () => {
  const { slug } = useParams();
  const {
    data: tour,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTourBySlugQuery(slug);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <TourDetails tour={tour.data || {}} />;
  } else if (isError) {
    content = error;
  }

  return <h1>{content}</h1>;
};

export default TourDetailsPage;
