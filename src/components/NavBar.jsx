import burgerMenu from '../assets/image/icon-menu.svg'

const NavBar = () => {
  return (
    <nav>
      <ul className=' hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-4 sm:items-center'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Popular</a>
        </li>
        <li>
          <a href='#'>Trending</a>
        </li>
        <li>
          <a href='#'>Categories</a>
        </li>
      </ul>
      <img
        className='w-10 h-4 cursor-pointer sm:hidden'
        src={burgerMenu}
        alt='Icon menu hamburquesa'
      />
    </nav>
  )
}

export default NavBar
