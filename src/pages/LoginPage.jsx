import { useState } from 'react';
import { useLoginMutation } from '../features/auth/authApiSlice';
import { setCredentials } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const credentials = { email, password };

    try {
      const res = await login(credentials).unwrap();
      dispatch(setCredentials({ user: res.user, token: res.token }));
      setTimeout(() => {
        navigate('/tours', { replace: true });
      }, 500);
    } catch (err) {
      alert(err.data.message);
    }
  };

  return (
    <main className='main'>
      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
        <form className='form' onSubmit={submitHandler}>
          <div className='form__group'>
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

          <div className='form__group '>
            <button className='btn btn--green'>Login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
