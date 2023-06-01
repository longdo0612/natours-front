import TourCardHeader from './TourCardHeader';
import TourCardDetails from './TourCardDetails';
import TourCardFooter from './TourCardFooter';

const TourCard = ({ tour }) => {
  return (
    <div className='card'>
      <TourCardHeader imageCover={tour.imageCover} name={tour.name} />
      <TourCardDetails tour={tour} />
      <TourCardFooter tour={tour} />
    </div>
  );
};

export default TourCard;
