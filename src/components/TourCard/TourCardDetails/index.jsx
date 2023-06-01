const TourCardDetails = ({ tour }) => {
  return (
    <div className='card__details'>
      <h4 className='card__sub-heading'>
        {tour.difficulty} {tour.duration}-days tour
      </h4>
      <p className='card__text'>{tour.summary}</p>
      <div className='card__data'>
        <svg className='card__icon'>
          <use xlinkHref='/img/icons.svg#icon-map-pin'></use>
        </svg>
        <span>{tour.startLocation.description}</span>
      </div>
      <div className='card__data'>
        <svg className='card__icon'>
          <use xlinkHref='/img/icons.svg#icon-calendar'></use>
        </svg>
        <span>
          {new Date(tour.startDates[0]).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </div>
      <div className='card__data'>
        <svg className='card__icon'>
          <use xlinkHref='/img/icons.svg#icon-flag'></use>
        </svg>
        <span>{tour.locations.length} stops</span>
      </div>
      <div className='card__data'>
        <svg className='card__icon'>
          <use xlinkHref='/img/icons.svg#icon-user'></use>
        </svg>
        <span>{tour.maxGroupSize} people</span>
      </div>
    </div>
  );
};

export default TourCardDetails;
