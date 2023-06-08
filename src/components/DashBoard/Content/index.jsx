/* eslint-disable */
import { useState } from 'react';
import {
  useUpdateUserDataMutation,
  useUpdateUserPasswordMutation,
} from '../../../features/users/userApiSlice';
import { useDispatch } from 'react-redux';
import {
  updateUser,
  setUserPreviewAvatar,
} from '../../../features/auth/authSlice';

const DashBoardContent = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [photo, setPhoto] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [updateUserData] = useUpdateUserDataMutation();
  const [updateUserPassword] = useUpdateUserPasswordMutation();
  const dispatch = useDispatch();

  const updateUserPhotoHandler = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    dispatch(setUserPreviewAvatar(URL.createObjectURL(file)));
  };

  const submitChangedUserSettingsHandler = async (e) => {
    e.preventDefault();
    try {
      // const newData = { name, email };
      const form = new FormData();
      form.append('name', name);
      form.append('email', email);
      form.append('photo', photo);
      const res = await updateUserData(form, user._id).unwrap();
      dispatch(updateUser({ user: { ...user, name, email } }));
      alert('Update data successfully!');
    } catch (err) {
      alert(err.data.message);
    }
  };

  const submitChangedPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { currentPassword, password: newPassword, passwordConfirm };
      const res = await updateUserPassword(data).unwrap();
      alert('Update data successfully!');
    } catch (err) {
      alert(err.data.message);
    }
  };

  return (
    <div className='user-view__content'>
      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
        <form
          className='form form-user-data'
          onSubmit={submitChangedUserSettingsHandler}
          encType='multipart/form-data'
        >
          <div className='form__group'>
            <label htmlFor='name' className='form__label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='form__input'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form__group ma-bt-md'>
            <label htmlFor='email' className='form__label'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              className='form__input'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form__group form__photo-upload'>
            <img
              src={
                user.preview ||
                `https://natours-f770.onrender.com/img/users/${user.photo}`
              }
              alt='User photo'
              className='form__user-photo'
            />

            <input
              type='file'
              accept='image/*'
              className='form__upload'
              name='photo'
              id='photo'
              onChange={updateUserPhotoHandler}
            />
            <label htmlFor='photo'>Choose new photo</label>
          </div>

          <div className='form__group right'>
            <button className='btn btn--small btn--green'>Save settings</button>
          </div>
        </form>
      </div>

      <div className='line'>&nbsp;</div>

      <div className='user-view__form-container'>
        <h2 className='heading-secondary ma-bt-md'>Password change</h2>
        <form
          className='form form-user-settings'
          onSubmit={submitChangedPasswordHandler}
        >
          <div className='form__group'>
            <label htmlFor='password-current' className='form__label'>
              Current password
            </label>
            <input
              type='password'
              id='password-current'
              className='form__input'
              placeholder='••••••••'
              required
              minLength='8'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className='form__group'>
            <label htmlFor='password' className='form__label'>
              New password
            </label>
            <input
              type='password'
              id='password'
              className='form__input'
              placeholder='••••••••'
              required
              minLength='8'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className='form__group ma-bt-lg'>
            <label htmlFor='password-confirm' className='form__label'>
              Confirm password
            </label>
            <input
              type='password'
              id='password-confirm'
              className='form__input'
              placeholder='••••••••'
              required
              minLength='8'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <div className='form__group right'>
            <button className='btn btn--small btn--green'>Save password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashBoardContent;
