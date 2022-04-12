import { Link } from 'react-router-dom';

function GoBackToHome({ text = 'Go Back to home' }) {
  return (
    <div>
      <Link to="/">{text}</Link>
    </div>
  );
}

export default GoBackToHome;
