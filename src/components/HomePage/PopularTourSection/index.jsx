import PopularTourCard from './TourCard';
import classes from './index.module.scss';
import clsx from 'clsx';

const TOP_POPULAR_TOURS = [
  {
    title: 'The sea explorer',
    duration: 3,
    maxGroupSize: 30,
    guides: [{ name: 'test 1' }, { name: 'test 2' }],
    shelter: 'hotels',
    difficulty: 'easy',
    price: 297,
    slug: 'the-sea-explorer',
  },
  {
    title: 'The forest hiker',
    duration: 7,
    maxGroupSize: 40,
    guides: [
      { name: 'test 1' },
      { name: 'test 2' },
      { name: 'test 3' },
      { name: 'test 4' },
      { name: 'test 5' },
      { name: 'test 6' },
    ],
    shelter: 'tents',
    difficulty: 'medium',
    price: 497,
    slug: 'the-forest-hiker',
  },
  {
    title: 'The snow adventure',
    duration: 5,
    maxGroupSize: 15,
    guides: [{ name: 'test 1' }, { name: 'test 2' }, { name: 'test 3' }],
    shelter: 'tents',
    difficulty: 'hard',
    price: 897,
    slug: 'the-snow-adventure',
  },
];

const PopularTourSection = () => {
  return (
    <section className={classes['section-tours']}>
      <div className='u-center-text ma-bt-ms'>
        <h2 className={clsx([classes['heading-secondary'], 'ma-bt-ms'])}>
          Most popular tours
        </h2>

        <div className={classes['popular-tours']}>
          {TOP_POPULAR_TOURS.map((tour, index) => (
            <PopularTourCard
              key={tour.title + index}
              index={index + 1}
              tour={tour}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTourSection;
