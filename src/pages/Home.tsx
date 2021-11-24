import { Link } from 'react-router-dom';

const Home: React.FC = props => (
  <div className="flex flex-wrap">
    <div className="bg-secondary w-full md:w-1/2 md:h-screen p-8">
      <h1 className="font-sans pt-40 pb-10 text-5xl font-black">Ranked Choice Voting</h1>
      <p>I'm baby vexillologist gochujang blue bottle art party PBR&B unicorn. Blog forage DIY fingerstache chambray. Mumblecore offal waistcoat tacos farm-to-table shaman intelligentsia tousled trust fund. Meh scenester biodiesel, quinoa prism flannel jianbing VHS.</p>
    </div>
    <div className="bg-primary w-full md:w-1/2 md:h-screen">
      <Link to="/vote">Vote</Link>
    </div>
  </div>
);

export default Home;