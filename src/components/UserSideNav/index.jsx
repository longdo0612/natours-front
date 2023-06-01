import { Link } from 'react-router-dom';

const UserSideNav = () => {
  return (
    <ul className='side-nav'>
      <li className='side-nav--active'>
        <a href='#'>
          <svg>
            <use xlinkHref='/img/icons.svg#icon-settings'></use>
          </svg>
          | Settings
        </a>
      </li>

      <li>
        <Link to='/my-tours' href='#'>
          <svg>
            <use xlinkHref='/img/icons.svg#icon-briefcase'></use>
          </svg>
          | My bookings
        </Link>
      </li>

      <li>
        <a href='#'>
          <svg>
            <use xlinkHref='/img/icons.svg#icon-star'></use>
          </svg>
          | My reviews
        </a>
      </li>

      <li>
        <a href='#'>
          <svg>
            <use xlinkHref='/img/icons.svg#icon-credit-card'></use>
          </svg>
          | Billing
        </a>
      </li>
    </ul>
  );
};

export default UserSideNav;
