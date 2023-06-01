const ReviewCard = ({ review }) => {
  return (
    <div className='reviews__card'>
      <div className='reviews__avatar'>
        <img
          src={`https://natours-longdo.vercel.app/img/users/${review.user.photo}`}
          alt={review.user.name}
          className='reviews__avatar-img'
        />
        <h6 className='reviews__user'>{review.user.name}</h6>
      </div>
      <p className='reviews__text'>{review.review}</p>
      <div className='reviews__rating'>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={review.user.name + star}
            className={`reviews__star reviews__star--${
              review.rating >= star ? 'active' : 'inactive'
            }`}
          >
            <use xlinkHref='/img/icons.svg#icon-star'></use>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
