import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './CatOrDogPage.module.scss';
import {setCurrentScreen} from '../../store/actions/screensActions';
import {SCREENS} from '../../utils/constatns';
import Navigation from '../../components/navigation/Navigation';
import {getCurrentScreen} from '../../store/selectors';

const CatOrDogPage = ({history}) => {
  console.log('---history: ', window.location);
  const dispatch = useDispatch();
  const handleOnClick = pet => {
    dispatch(setCurrentScreen(SCREENS[pet]));
    history.push('/pet-form');
  };
  const currentScreen = useSelector(state => getCurrentScreen(state));
  return (
    <div className={style['cat-or-dog-page-wrapper']}>
      <Navigation currentScreen={currentScreen} />
      <div className='lost-or-found-options-wrapper'>
        <div className="lost-or-found-option" onClick={() => handleOnClick('cat')}>Cat</div>
        <div className="lost-or-found-option" onClick={() => handleOnClick('dog')}>Dog</div>
      </div>
    </div>
  );
};

export default CatOrDogPage;
