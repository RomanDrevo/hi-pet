import React from 'react';
import styles from './LostCat.module.scss';
import UploadImage from '../uploadImage';

const LostCat = (props) => {
  return (
    <div className={styles['lost-cat-wrapper']}>
      <div className="action-layout" />
      <div className='images-layout'>

        <UploadImage />
      </div>
      <div className='where-lost-layout'/>
      <div className='color-patterns-layout'/>
      <div className='additional-layout'/>
    </div>
  );
};

export default LostCat;