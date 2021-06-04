import React from 'react';

import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

const App = () => {
  return (
    <div>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
