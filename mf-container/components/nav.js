import Link from 'next/link'

const Nav = () => (
  <div>
    <Link href="/core">Load Core</Link>
    <Link href="/">Container</Link>
    <Link href="/pro">Load Pro</Link>
  </div>
)

export default Nav