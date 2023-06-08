const TourDetailsGallery = ({ tour }) => {
  return (
    <section className='section-pictures'>
      {tour.images.map((image, index) => (
        <div key={image + index} className='picture-box'>
          <img
            className={`picture-box__img picture-box__img--${index + 1}`}
            src={`https://natours-f770.onrender.com/img/tours/${image}`}
            alt={tour.name + (index + 1)}
          />
        </div>
      ))}
    </section>
  );
};

export default TourDetailsGallery;
