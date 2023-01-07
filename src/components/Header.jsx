function Header() {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <a href='/' className='left brand-logo'>
          React Shop
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <a
              href='https://github.com/michey85/react-shop'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
