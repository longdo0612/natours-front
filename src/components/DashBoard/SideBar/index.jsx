import UserSideNav from '../../UserSideNav';
import AdminSideNav from '../../AdminSideNav';

const SideBar = ({ role }) => {
  let SideNav;

  if (role === 'user') {
    SideNav = <UserSideNav />;
  } else if (role === 'admin') {
    SideNav = <AdminSideNav />;
  }
  return <nav className='user-view__menu'>{SideNav}</nav>;
};

export default SideBar;
