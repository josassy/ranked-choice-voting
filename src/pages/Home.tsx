import { Link } from 'react-router-dom';

const Home: React.FC = props => (
  <>
    <h1>Home page</h1>
    <Link to="/vote">Vote</Link>
  </>
);

export default Home;