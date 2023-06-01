import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { useSignupMutation } from '../features/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signup] = useSignupMutation();

  const signUpFormSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await signup({
        name,
        email,
        password,
        passwordConfirm,
      }).unwrap();

      dispatch(setCredentials({ token: res.token, user: res.user }));
      navigate('/tours');
    } catch (err) {
      if (err.data.message.startsWith('Duplicate')) {
        return alert('The given email is used. Please use another email.');
      }
      alert(err.data.message);
    }
  };

  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Create new account</h2>
        <form className='form' onSubmit={signUpFormSubmitHandler}>
          <div className='form__group'>
            <label htmlFor='name' className='form__label'>
              Name
            </label>
            <input
              type='text'
              placeholder='your name'
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
              placeholder='you@example.com'
              id='email'
              className='form__input'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form__group ma-bt-md'>
            <label htmlFor='password' className='form__label'>
              Password
            </label>
            <input
              type='password'
              placeholder='••••••••'
              required
              minLength='8'
              id='password'
              className='form__input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='form__group ma-bt-md'>
            <label htmlFor='passwordConfirm' className='form__label'>
              Confirm Password
            </label>
            <input
              type='password'
              placeholder='••••••••'
              required
              minLength='8'
              id='passwordConfirm'
              className='form__input'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <div className='form__group '>
            <button className='btn btn--green'>Sign Up</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
