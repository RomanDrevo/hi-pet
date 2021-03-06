import React from 'react';
import { useDispatch } from 'react-redux';
import style from './CatOrDogPage.module.scss';
import {setCurrentFlow} from '../../store/actions/flowActions';
import {FLOWS} from '../../utils/constatns';

const CatOrDogPage = ({history}) => {
    console.log(history);
    const dispatch = useDispatch();
  const handleOnClick = pet => {
    dispatch(setCurrentFlow(FLOWS[pet]));
    history.push('/pet-form');
  };
  return (
    <div className={style['cat-or-dog-page-wrapper']}>
      <div className="lost-or-found-option" onClick={() => handleOnClick('cat')}>Cat</div>
      <div className="lost-or-found-option" onClick={() => handleOnClick('dog')}>Dog</div>
    </div>
  );
};

export default CatOrDogPage;
