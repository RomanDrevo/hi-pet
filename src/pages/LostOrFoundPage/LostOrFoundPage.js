import React from 'react';
import { useDispatch } from 'react-redux';
// import { setCurrentScreen } from '../../../store/actions/screensActions';
import style from './LostOrFoundPage.module.scss';

const SCREENS = {
  lost: 'Lost',
  found: 'Found',
};

const LostOrFoundPage = () => {
  const dispatch = useDispatch();

  const handleOnClick = screen => {
    // dispatch(push('/cat-or-dog'));
    // dispatch(setCurrentScreen(SCREENS[screen]));
  };
  return (
    <div className={style['lost-or-found-page-wrapper']}>
      <div className="lost-or-found-option" onClick={() => handleOnClick('lost')}>Lost</div>
      <div className="lost-or-found-option" onClick={() => handleOnClick('found')}>Found</div>
    </div>
  );
};

export default LostOrFoundPage;
