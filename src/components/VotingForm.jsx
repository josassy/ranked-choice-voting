import StyledTextInput from "./StyledTextInput";

const VotingForm = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('woo hoo');
  }

  return (
    <form className="flex-auto" onSubmit={handleSubmit}>
      <StyledTextInput required id='name' name='name' label='To begin, please enter your name' placeholder="Full Name" />
      <button className="p-2 w-full bg-primary hover:bg-secondary text-white rounded-xl" type='submit'>Next</button>
      <p className="my-2 italic text-sm">* indicates required field</p>
    </form>
  )
}

export default VotingForm;