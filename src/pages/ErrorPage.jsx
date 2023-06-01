import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>
        {error.status === 404 ? '404 Not Found' : 'Something went wrong!'}
      </h1>
    </div>
  );
};

export default ErrorPage;
