import clsx from 'clsx';
import classes from './index.module.scss';
import { Link } from 'react-router-dom';
import compositionPhoto1 from '../../../assets/nat-1-large.jpg';
import compositionPhoto2 from '../../../assets/nat-2-large.jpg';
import compositionPhoto3 from '../../../assets/nat-3-large.jpg';

const AboutSection = () => {
  return (
    <section className={classes['section-about']}>
      <div className='u-center-text ma-bt-ms'>
        <h2 className={classes['heading-secondary']}>
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className={classes['main-content']}>
        <div className={classes['main-content__text']}>
          <h3 className={clsx([classes['heading-tertiary'], 'ma-bt-sm'])}>
            You are going to fall in love with nature
          </h3>
          <p className={classes['paragraph']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            dolorum molestiae eligendi corporis rem ab aperiam est voluptas.
          </p>

          <h3 className={clsx([classes['heading-tertiary'], 'ma-bt-sm'])}>
            Live adventures like you never have before
          </h3>
          <p className={classes['paragraph']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            soluta consequatur earum consequuntur veritatis itaque, magnam
            necessitatibus labore.
          </p>

          <Link className={clsx([classes['btn-text']])}>Learn more &rarr;</Link>
        </div>

        <div className={classes.composition}>
          <img
            src={compositionPhoto1}
            alt='photo 1'
            className={clsx([
              classes['composition__photo'],
              classes['composition__photo--p1'],
            ])}
          />
          <img
            src={compositionPhoto2}
            alt='photo 2'
            className={clsx([
              classes['composition__photo'],
              classes['composition__photo--p2'],
            ])}
          />
          <img
            src={compositionPhoto3}
            alt='photo 3'
            className={clsx([
              classes['composition__photo'],
              classes['composition__photo--p3'],
            ])}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
