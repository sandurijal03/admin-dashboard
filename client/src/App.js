import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import NewUser from './pages/newUser/NewUser';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newuser'>
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
