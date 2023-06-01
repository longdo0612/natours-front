import { Link } from 'react-router-dom';
import classes from './index.module.scss';
import clsx from 'clsx';

const PopularTourCard = ({ index, tour }) => {
  return (
    <div className={classes.card}>
      <div
        className={clsx([classes['card__side'], classes['card__side--front']])}
      >
        <div
          className={clsx([
            classes['card__picture'],
            classes[`card__picture--${index}`],
          ])}
        >
          &nbsp;
        </div>
        <h4 className={classes['card__heading']}>
          {' '}
          <span
            className={clsx([
              classes['card__heading-span'],
              classes[`card__heading-span--${index}`],
            ])}
          >
            {tour.title}
          </span>
        </h4>
        <div className={classes['card__details']}>
          <ul>
            <li>{tour.duration} day tours</li>
            <li>Up to {tour.maxGroupSize} people</li>
            <li>{tour.guides.length} tour guides</li>
            <li>
              {tour.shelter === 'hotels'
                ? 'Sleep in cozy hotels'
                : 'Sleep in provided tents'}
            </li>
            <li>Difficulty: {tour.difficulty}</li>
          </ul>
        </div>
      </div>

      <div
        className={clsx([
          classes['card__side'],
          classes['card__side--back'],
          classes[`card__side--back--${index}`],
        ])}
      >
        <div className={classes['card__cta']}>
          <div className={classes['card__price-box']}>
            <p className={classes['card__price-only']}>Only</p>
            <p className={classes['card__price-value']}>${tour.price}</p>
          </div>

          <Link
            to={`/tours/${tour.slug}`}
            className={clsx([classes.btn, classes['btn-white']])}
          >
            Book now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularTourCard;
