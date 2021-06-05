import React from 'react';
import { Visibility } from '@material-ui/icons';

import styles from './WidgetSm.module.css';

const WidgetSm = () => {
  return (
    <div className={styles.widgetSm}>
      <span className={styles.widgetSmTitle}>New Join Meembers</span>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_(cropped).png'
            alt=''
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Taylor Swift</span>
            <span className={styles.widgetSmUserTitle}>Progrmmer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_(cropped).png'
            alt=''
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Taylor Swift</span>
            <span className={styles.widgetSmUserTitle}>Progrmmer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_(cropped).png'
            alt=''
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Taylor Swift</span>
            <span className={styles.widgetSmUserTitle}>Progrmmer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_(cropped).png'
            alt=''
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Taylor Swift</span>
            <span className={styles.widgetSmUserTitle}>Progrmmer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_(cropped).png'
            alt=''
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Taylor Swift</span>
            <span className={styles.widgetSmUserTitle}>Progrmmer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
