import React from 'react';

function Header(props) {
  const handleSearchClick = () => {
    document.querySelector('.search-form').classList.toggle('active');
  };
  const handleLoginClick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
  };
  window.onscroll = () => {
    document.querySelector('.search-form').classList.remove('active');
    if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
    } else {
      document.querySelector('.header .header-2').classList.remove('active');
    }
  };
  return (
    <header className='header'>
      <div className='header-1'>
        <a href='#' class='logo'>
          <a href='#' class='logo'>
            {' '}
            <i class='fas fa-book'></i> bookly{' '}
          </a>
        </a>

        <form action='' className='search-form'>
          <input
            type='search'
            name=''
            placeholder='search here...'
            id='search-box'
          />
          <label for='search-box' className='fas fa-search'></label>
        </form>

        <div className='icons'>
          <div
            id='search-btn'
            className='fas fa-search'
            onClick={handleSearchClick}
          ></div>
          <a href='#' className='fas fa-heart'></a>
          <a href='#' className='fas fa-shopping-cart'></a>
          <div
            id='login-btn'
            className='fas fa-user'
            onClick={handleLoginClick}
          ></div>
        </div>
      </div>

      <div className='header-2'>
        <nav className='navbar'>
          <a href='#home'>home</a>
          <a href='#featured'>featured</a>
          <a href='#arrivals'>arrivals</a>
          <a href='#reviews'>reviews</a>
          <a href='#blogs'>blogs</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
