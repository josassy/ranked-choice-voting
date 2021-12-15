import { Link } from 'react-router-dom';
import StyledLink from '../components/StyledLink';
import StyledH1 from '../components/StyledH1';

const Home = () => (
  <>
    <header className="h-10">
      <img src='/images/home.jpg' className="w-full h-full object-cover" alt='' />
    </header>
    <div className="m-auto max-w-3xl p-12">
      <StyledH1>Ranked Choice Voting</StyledH1>
      <p className="mb-12">
        Ranked choice voting is a different way of voting that allows voters to rank candidates by preference rather than picking just one. This can help lead to election results that better represent its voters. I've made an app that shows how this kind of voting interface could be implemented on a website.
      </p>
      <Link to="/vote" className="group text-lg p-4 bg-primary hover:bg-secondary text-white rounded-2xl"><span className="pb-1 border-b border-primary group-hover:border-white">Try it now &raquo;</span></Link>
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