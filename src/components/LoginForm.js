import React from 'react';

function LoginForm(props) {
  const handleCloseClick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
  };
  return (
    <div class='login-form-container'>
      <div
        id='close-login-btn'
        class='fas fa-times'
        onClick={handleCloseClick}
      ></div>

      <form action=''>
        <h3>sign in</h3>
        <span>username</span>
        <input
          type='email'
          name=''
          class='box'
          placeholder='enter your email'
          id=''
        />
        <span>password</span>
        <input
          type='password'
          name=''
          class='box'
          placeholder='enter your password'
          id=''
        />
        <div class='checkbox'>
          <input type='checkbox' name='' id='remember-me' />
          <label for='remember-me'> remember me</label>
        </div>
        <input type='submit' value='sign in' class='btn' />
        <p>
          forget password ? <a href='#'>click here</a>
        </p>
        <p>
          don't have an account ? <a href='#'>create one</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
