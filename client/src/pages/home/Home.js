import React from 'react';

import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import styles from './Home.module.css';
import { userData } from '../../dumData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className={styles.home}>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        datakey='Active User'
      />
      <div className={styles.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
