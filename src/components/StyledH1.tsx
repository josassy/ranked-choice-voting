type StyledH1Props =
  {
    children: React.ReactNode
  }
const StyledH1 = ({ children }: StyledH1Props) => (
  <>
    <h1 className="my-6 text-5xl text-primary font-sans font-black">
      {children}
      <div className="my-2 w-1/6 h-1.5 object-cover bg-secondary" />
    </h1>
  </>
)

export default StyledH1;
