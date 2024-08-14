'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';
import styles from '../styles/layout.module.css';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLoginClick = () => {
    setIsModalVisible(true);
  };

  const handleLoginSuccess = (data) => {
    setUserName(data.accessToken); 
    setIsModalVisible(false);
    alert(`Logged in with token: ${data.accessToken}`); 
  };

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <Navbar onLoginClick={handleLoginClick} />
      </header>
      <main className={styles.mainContent}>
        <div className={styles.bgPattern}>
          <div className={styles.bg1}></div>
          <div className={styles.bg2}></div>
          <div className={styles.bg3}></div>
          <div className={styles.bg4}></div>
        </div>
        {!userName ? (
          <h1>Please log in</h1>
        ) : (
          <h1>Welcome, {userName}!</h1>
        )}
      </main>
      <footer className="text-center py-4">
        <p>&copy; Copyright 2024</p>
      </footer>
      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <LoginForm onSuccess={handleLoginSuccess} />
      </Modal>
    </div>
  );
};

export default Home;