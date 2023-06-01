import { Link } from 'react-router-dom';

const TourCardFooter = ({ tour }) => {
  return (
    <div className='card__footer'>
      <p>
        <span className='card__footer-value'>${tour.price}</span>
        <span className='card__footer-text'> per person</span>
      </p>
      <p className='card__ratings'>
        <span className='card__footer-value'>{tour.ratingsAverage} </span>
        <span className='card__footer-text'>
          rating ({tour.ratingsQuantity})
        </span>
      </p>
      <Link
        to={tour.slug}
        state={{ id: tour.id }}
        className='btn btn--green btn--small'
      >
        Details
      </Link>
    </div>
  );
};

export default TourCardFooter;
