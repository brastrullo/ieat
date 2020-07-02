import React from 'react';
import styles from './loadingImg.module.css';

const LoadingImg = () => {
  return (
    <div className={styles.loading_img}>
      <div className={styles.lds_default}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
export default LoadingImg;