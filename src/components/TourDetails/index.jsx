import TourDetailsCta from './Cta';
import TourDetailsDescription from './Description';
import TourDetailsGallery from './Gallery';
import TourDetailsHeader from './Header';
import TourDetailsMap from './Map';
import TourDetailsReviews from './Reviews';

const TourDetails = ({ tour }) => {
  return (
    <>
      <TourDetailsHeader tour={tour} />
      <TourDetailsDescription tour={tour} />
      <TourDetailsGallery tour={tour} />
      <TourDetailsMap locations={tour.locations} />
      <TourDetailsReviews tour={tour} />
      <TourDetailsCta tour={tour} />
    </>
  );
};

export default TourDetails;
