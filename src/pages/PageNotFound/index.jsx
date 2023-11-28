import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container text-center mt-5">
      <div className="jumbotron bg-light">
        <h1 className="display-4">Page Not Found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <hr className="my-4" />
        <p className="mb-5">You can return to the home page using the button below.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
