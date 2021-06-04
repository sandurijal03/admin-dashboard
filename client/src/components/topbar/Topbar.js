import React from 'react';
import styles from './Topbar.module.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topLeft}>
          <span className={styles.logo}>IAMADMIN</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topIconContainer}>
            <NotificationsNone />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topIconContainer}>
            <Language />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topIconContainer}>
            <Settings />
          </div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_(cropped).png'
            alt=''
            className={styles.topAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
