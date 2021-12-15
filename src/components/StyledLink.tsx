import { Link } from "react-router-dom";

type StyledLinkProps =
  {
    to: string,
    children: React.ReactNode
  }
const StyledLink = ({ to, children }: StyledLinkProps) => (
  <Link className="text-primary hover:text-secondary" to={to}>{children}</Link>
)

export default StyledLink;