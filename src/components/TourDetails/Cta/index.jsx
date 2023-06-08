import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../../features/auth/authSlice';
import { useGetCheckoutSessionQuery } from '../../../features/tours/tourApiSlice';

const TourDetailsCta = ({ tour }) => {
  const token = useSelector(selectCurrentToken);

  const { data } = useGetCheckoutSessionQuery(tour.id);

  const checkoutHandler = async () => {
    window.location.replace(data.session.url);
  };

  const ctaButton = token ? (
    <Link className='btn btn--green span-all-rows' onClick={checkoutHandler}>
      Book tour now!
    </Link>
  ) : (
    <Link className='btn btn--green span-all-rows' to='/login'>
      Login to book tour
    </Link>
  );
  return (
    <section className='section-cta'>
      <div className='cta'>
        <div className='cta__img cta__img--logo'>
          <img src='/img/logo-white.png' alt='Natours logo' />
        </div>
        <img
          src={`https://natours-f770.onrender.com/img/tours/${tour.images[0]}`}
          alt={tour.name + 'image 1'}
          className='cta__img cta__img--1'
        />
        <img
          src={`https://natours-f770.onrender.com/img/tours/${tour.images[1]}`}
          alt={tour.name + 'image 2'}
          className='cta__img cta__img--2'
        />

        <div className='cta__content'>
          <h2 className='heading-secondary'>What are you waiting for?</h2>
          <p className='cta__text'>
            {tour.duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          {ctaButton}
        </div>
      </div>
    </section>
  );
};

export default TourDetailsCta;
