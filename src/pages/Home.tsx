import { Link } from 'react-router-dom';

const Home: React.FC = props => (
  <div className="flex flex-wrap">
    <div className="bg-secondary w-full md:w-1/2 md:h-screen">
      <h1>Ranked Choice Voting</h1>
    </div>
    <div className="bg-primary w-full md:w-1/2 md:h-screen">
      <Link to="/vote">Vote</Link>
    </div>
  </div>
);

export default Home;