const TourDetailsDescription = ({ tour }) => {
  return (
    <section className='section-description'>
      <div className='overview-box'>
        <div>
          <div className='overview-box__group'>
            <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-calendar'></use>
              </svg>
              <span className='overview-box__label'>Next date</span>
              <span className='overview-box__text'>
                {new Date(tour.startDates[0]).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-trending-up'></use>
              </svg>
              <span className='overview-box__label'>Difficulty</span>
              <span className='overview-box__text'>{tour.difficulty}</span>
            </div>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-user'></use>
              </svg>
              <span className='overview-box__label'>Participants</span>
              <span className='overview-box__text'>
                {tour.maxGroupSize} people
              </span>
            </div>
            <div className='overview-box__detail'>
              <svg className='overview-box__icon'>
                <use xlinkHref='/img/icons.svg#icon-star'></use>
              </svg>
              <span className='overview-box__label'>Rating</span>
              <span className='overview-box__text'>
                {tour.ratingsAverage} / 5
              </span>
            </div>
          </div>

          <div className='overview-box__group'>
            <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

            {tour.guides.map((guide) => (
              <div key={guide._id} className='overview-box__detail'>
                <img
                  src={`https://natours-longdo.vercel.app/img/users/${guide.photo}`}
                  alt={guide.role}
                  className='overview-box__img'
                />
                <span className='overview-box__label'>
                  {guide.role.split('-').join(' ')}
                </span>
                <span className='overview-box__text'>{guide.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='description-box'>
        <h2 className='heading-secondary ma-bt-lg'>About {tour.name}</h2>
        <p className='description__text'>{tour.description.split('\n')[0]}</p>
        <p className='description__text'>{tour.description.split('\n')[1]}</p>
      </div>
    </section>
  );
};

export default TourDetailsDescription;
