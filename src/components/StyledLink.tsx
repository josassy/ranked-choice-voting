import { Link } from "react-router-dom";

type StyledLinkProps =
  {
    to: string;
    children: React.ReactNode;
    className?: string;
  };
const StyledLink = ({ to, children, className }: StyledLinkProps) => (
  <Link className={`text-primary hover:text-secondary ${className}`} to={to}>{children}</Link>
)

export default StyledLink;