const TourDetailsGallery = ({ tour }) => {
  return (
    <section className='section-pictures'>
      {tour.images.map((image, index) => (
        <div key={image + index} className='picture-box'>
          <img
            className={`picture-box__img picture-box__img--${index + 1}`}
            src={`https://natours-longdo.vercel.app/img/tours/${image}`}
            alt={tour.name + (index + 1)}
          />
        </div>
      ))}
    </section>
  );
};

export default TourDetailsGallery;
