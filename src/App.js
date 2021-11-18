import { useEffect } from 'react';
import './App.css';
import BottomNavbar from './components/BottomNavbar';
import Header from './components/Header';
import Loader from './components/Loader';
import LoginForm from './components/LoginForm';
import MainView from './components/MainView';
function App() {
  return (
    <div className='App'>
      <Header />
      <BottomNavbar />
      <LoginForm />
      <MainView />
      <Loader />
    </div>
  );
}

export default App;
