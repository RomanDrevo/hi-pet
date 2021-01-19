import React from 'react';
import style from './LostOrFoundPage.module.scss';
import {Link} from 'react-router-dom';

const LostOrFoundPage = () => {
  return (
    <div className={style['lost-or-found-page-wrapper']}>
      <Link className="lost-or-found-option" to='/pets?flow=lost'>Lost</Link>
      <Link className="lost-or-found-option" to='/pets?flow=found'>Found</Link>
    </div>
  );
};

export default LostOrFoundPage;
