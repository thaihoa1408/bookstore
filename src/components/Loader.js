import React, { useEffect } from 'react';

function Loader(props) {
  const loader = () => {
    document.querySelector('.loader-container').classList.add('active');
  };
  const fadeout = () => {
    setTimeout(loader, 3800);
  };
  window.onload = () => {
    fadeout();
  };

  return (
    <div className='loader-container'>
      <img src='image/loader-img1.gif' alt='' />
      <p class='typing-effect'>Welcome to my book store !</p>
    </div>
  );
}

export default Loader;
