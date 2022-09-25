import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/country-details'>Country Details</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
