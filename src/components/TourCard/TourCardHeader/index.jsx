const TourCardHeader = ({ imageCover, name }) => {
  return (
    <div className='card__header'>
      <div className='card__picture'>
        <div className='card__picture-overlay'>&nbsp;</div>
        <img
          src={`https://natours-f770.onrender.com/img/tours/${imageCover}`}
          alt={name}
          className='card__picture-img'
        />
      </div>

      <h3 className='heading-tertirary'>
        <span>{name}</span>
      </h3>
    </div>
  );
};

export default TourCardHeader;
