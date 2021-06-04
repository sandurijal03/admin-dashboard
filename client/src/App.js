import React from 'react';

import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
