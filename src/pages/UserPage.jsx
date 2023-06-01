import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

import SideBar from '../components/DashBoard/SideBar';
import DashBoardContent from '../components/DashBoard/Content';

const UserPage = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <main className='main'>
      <div className='user-view'>
        <SideBar role={user.role} />

        <DashBoardContent user={user} />
      </div>
    </main>
  );
};

export default UserPage;
