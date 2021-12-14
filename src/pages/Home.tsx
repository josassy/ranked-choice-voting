import { Link } from 'react-router-dom';
import StyledLink from '../components/StyledLink';

const Home = () => (
  <>
    <header className="h-20">
      <img src='/images/home.jpg' className="w-full h-full object-cover" alt='' />
    </header>
    <div className="m-auto max-w-3xl p-12">
      <h1 className="my-6 text-5xl text-primary font-sans font-black">Ranked Choice Voting</h1>
      <p className="mb-12">
        Ranked choice voting is a different way of voting that allows voters to rank candidates by preference rather than picking just one. This can help lead to election results that better represent its voters. I've made an app that shows how this kind of voting interface could be implemented on a website.
      </p>
      <button className="text-lg p-4 bg-primary hover:bg-secondary hover:border-primary hover:text-primary border text-white rounded-2xl"><Link to="/vote">Try it now &raquo;</Link></button>
      <h2 className="mt-12 mb-4 text-2xl text-primary">What is Ranked Choice Voting?</h2>
      <p className='my-4'>
        Ranked choice voting (RCV) describes voting systems that allow voters to rank candidates in order of preference, and then uses those rankings to elect candidates who best represent their constituents.

        RCV is straightforward for voters: rank candidates in order of choice. Voters can rank as many candidates as they want, without fear that ranking others will hurt the chances of their favorite candidate.

        How the votes are counted depends on whether RCV is used to elect a single office, like a mayor or governor, or whether it is used to elect more than one position at once, like an at-large city council or a state legislature elected in a multi-winner district (<StyledLink href='https://www.fairvote.org/rcv#how_rcv_works'>FairVote.org</StyledLink>).
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8Z2fRPRkWvY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p className="my-4">Learn more about ranked choice voting at <a className="text-primary hover:text-secondary" href="https://www.fairvote.org/rcv">fairvote.org</a>.</p>
    </div >
    <footer className="h-20">
      <img src='/images/home.jpg' className="w-full h-full object-cover" alt='' />
    </footer>
  </>
);

export default Home;