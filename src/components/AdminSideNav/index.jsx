const AdminSideNav = () => {
  return (
    <div className='admin-nav'>
      <h5 className='admin-nav__heading'>Admin</h5>
      <ul className='side-nav'>
        <li>
          <a href='#'>
            <svg>
              <use xlinkHref='/img/icons.svg#icon-map'></use>
            </svg>
            | Manage tours
          </a>
        </li>

        <li>
          <a href='#'>
            <svg>
              <use xlinkHref='/img/icons.svg#icon-users'></use>
            </svg>
            | Manage users
          </a>
        </li>

        <li>
          <a href='#'>
            <svg>
              <use xlinkHref='/img/icons.svg#icon-star'></use>
            </svg>
            | Manage reviews
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideNav;
