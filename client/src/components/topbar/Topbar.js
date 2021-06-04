import React from 'react';
import styles from './Topbar.module.css';

import { MdNotificationsNone, MdLanguage, MdSettings } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topLeft}>
          <span className={styles.logo}>IAMADMIN</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topIconContainer}>
            <MdNotificationsNone />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topIconContainer}>
            <MdLanguage />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topIconContainer}>
            <MdSettings />
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
