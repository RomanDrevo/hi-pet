import React from 'react';
import { useDispatch } from 'react-redux';
// import { setCurrentFlow } from '../../../store/actions/screensActions';
import style from './LostOrFoundPage.module.scss';
import {setCurrentFlow} from '../../store/actions/flowActions';
import {FLOWS} from '../../utils/constatns';

const LostOrFoundPage = ({history}) => {
  const dispatch = useDispatch();

  const handleOnClick = flow => {
    dispatch(setCurrentFlow(FLOWS[flow]));
    if(flow === 'found'){
      history.push('/pets');
    }
    else if(flow === 'lost'){
      history.push('/pets-form');
    }
  };
  return (
    <div className={style['lost-or-found-page-wrapper']}>
      <div className="lost-or-found-option" onClick={() => handleOnClick('lost')}>Lost</div>
      <div className="lost-or-found-option" onClick={() => handleOnClick('found')}>Found</div>
    </div>
  );
};

export default LostOrFoundPage;
