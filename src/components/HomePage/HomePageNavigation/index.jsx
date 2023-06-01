import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const HomePageNavigation = () => {
  return (
    <div className={classes.navigation}>
      <input
        type='checkbox'
        className={classes['navigation__checkbox']}
        id='navigation-toggle'
      />

      <label
        htmlFor='navigation-toggle'
        className={classes['navigation__button']}
      >
        <span className={classes['navigation__icon']}>&nbsp;</span>
      </label>

      <div className={classes['navigation__background']}>&nbsp;</div>

      <nav className={classes['navigation__nav']}>
        <ul className={classes['navigation__list']}>
          <li className={classes['navigation__item']}>
            <Link to='#' className={classes['navigation__link']}>
              <span>01</span>
              About Natours
            </Link>
          </li>
          <li className={classes['navigation__item']}>
            <Link to='#' className={classes['navigation__link']}>
              <span>02</span>
              Your benefits
            </Link>
          </li>
          <li className={classes['navigation__item']}>
            <Link to='#' className={classes['navigation__link']}>
              <span>03</span>
              Popular tours
            </Link>
          </li>
          <li className={classes['navigation__item']}>
            <Link to='#' className={classes['navigation__link']}>
              <span>04</span>
              Stories
            </Link>
          </li>
          <li className={classes['navigation__item']}>
            <Link to='#' className={classes['navigation__link']}>
              <span>05</span>
              Book now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePageNavigation;
