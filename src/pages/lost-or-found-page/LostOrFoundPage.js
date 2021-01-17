import React from 'react';
import { useDispatch } from 'react-redux';
// import { setCurrentFlow } from '../../../store/actions/screensActions';
import style from './LostOrFoundPage.module.scss';
import {setCurrentFlow} from '../../store/actions/flowActions';
import {FLOWS} from '../../utils/constatns';
import {Link} from 'react-router-dom';

const LostOrFoundPage = () => {
  // const dispatch = useDispatch();

  // const handleOnClick = flow => {
  //   dispatch(setCurrentFlow(FLOWS[flow]));
  //
  //   history.push('/pets');
  //
  //   // else if(flow === 'lost'){
  //   //   history.push('/pets-form');
  //   // }
  // };
  return (
    <div className={style['lost-or-found-page-wrapper']}>
      <Link className="lost-or-found-option" to='/pets?flow=lost'>Lost</Link>
      <Link className="lost-or-found-option" to='/pets/666'>Found</Link>
    </div>
  );
};

export default LostOrFoundPage;
