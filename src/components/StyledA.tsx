type StyledLinkProps =
  {
    href: string,
    children: React.ReactNode
  }
const StyledA = ({ href, children }: StyledLinkProps) => (
  <a className="text-primary hover:text-secondary" href={href}>{children}</a>
)

export default StyledA;