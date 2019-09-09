import React from 'react';
import styles from './UserLayout.less';

const UserLayout: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
          </div>
          <div className={styles.desc}>卓师兄星火后台</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
