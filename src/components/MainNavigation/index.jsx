import { Link } from 'react-router-dom';
import {
  selectCurrentToken,
  selectCurrentUser,
} from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
  const currentToken = useSelector(selectCurrentToken);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link to='/tours' className='nav__el'>
          All tours
        </Link>
        <form className='nav__search'>
          <button className='nav__search-btn'>
            <svg>
              <use xlinkHref='/img/icons.svg#icon-search'></use>
            </svg>
          </button>
          <input
            type='text'
            placeholder='Search tours'
            className='nav__search-input'
          />
        </form>
      </nav>
      <Link to='/' className='header__logo'>
        <img src='/img/logo-white.png' alt='Natours logo' />
      </Link>

      {currentToken ? (
        <nav className='nav nav--user'>
          <Link to='/my-tours' className='nav__el'>
            My bookings
          </Link>
          <Link to='/me' className='nav__el'>
            <img
              src={
                currentUser.preview ||
                `https://natours-longdo.vercel.app/img/users/${currentUser.photo}`
              }
              alt='User photo'
              className='nav__user-img'
            />
            <span>{currentUser.name}</span>
          </Link>
        </nav>
      ) : (
        <nav className='nav nav--user'>
          <Link to='/login' className='nav__el'>
            Log in
          </Link>
          <Link to='/signup' className='nav__el nav__el--cta'>
            Sign up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default MainNavigation;
