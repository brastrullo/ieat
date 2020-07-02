import React from 'react';
import styles from './loadingBtn.module.css';

const LoadingBtn = () => {
  return (
    <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
  )
}
export default LoadingBtn;