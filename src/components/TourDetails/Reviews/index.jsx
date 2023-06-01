import ReviewCard from './ReviewCard';

const TourDetailsReviews = ({ tour }) => {
  return (
    <section className='section-reviews'>
      <div className='reviews'>
        {tour.reviews.map((review) => (
          <ReviewCard review={review} key={review._id} />
        ))}
      </div>
    </section>
  );
};

export default TourDetailsReviews;
