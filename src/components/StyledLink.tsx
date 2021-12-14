
type StyledLinkProps =
  {
    href: string,
    children: React.ReactNode
  }
const StyledLink = ({ href, children }: StyledLinkProps) => (
  <a className="text-primary hover:text-secondary" href={href}>{children}</a>
)

export default StyledLink;