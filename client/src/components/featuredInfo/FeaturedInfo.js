import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

import styles from './FeaturedInfo.module.css';

const FeaturedInfo = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Revenue</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,415</span>
          <span className={styles.featuredMoneyRate}>
            -11.4{' '}
            <ArrowDownward
              className={`${styles.featuredIcon} ${styles.negative}`}
            />
          </span>
        </div>
        <div className={styles.featuredSub}>Compared to last month</div>
      </div>

      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Sales</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,415</span>
          <span className={styles.featuredMoneyRate}>
            -11.4{' '}
            <ArrowDownward
              className={`${styles.featuredIcon} ${styles.negative}`}
            />
          </span>
        </div>
        <div className={styles.featuredSub}>Compared to last month</div>
      </div>

      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Cost</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,415</span>
          <span className={styles.featuredMoneyRate}>
            -11.4 <ArrowUpward className={styles.featuredIcon} />
          </span>
        </div>
        <div className={styles.featuredSub}>Compared to last month</div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
