import { Link } from 'react-router-dom';
import classes from './index.module.scss';
import clsx from 'clsx';

const HomePageHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes['text-box']}>
        <div className={classes['heading-primary']}>
          <span className={classes['heading-primary-main']}>Explore</span>
          <span className={classes['heading-primary-sub']}>
            the nature around you
          </span>
        </div>

        <Link
          to='/tours'
          className={clsx([
            classes['btn'],
            classes['btn-white'],
            classes['btn-animated'],
          ])}
        >
          Discover our tours
        </Link>
      </div>
    </header>
  );
};

export default HomePageHeader;
