import StyledH1 from '../components/StyledH1';
import StyledLink from '../components/StyledLink';
import VotingForm from '../components/VotingForm';

const Vote = () => (
  <div className="flex flex-col flex-auto m-auto max-w-3xl p-12">
    <StyledH1>Vote</StyledH1>
    <VotingForm />
    <p>This app is for demonstration purposes only and transmits no data.</p>
    <StyledLink className="self-start" to="/">Back to Home</StyledLink>
  </div>
);

export default Vote;