import React from 'react';
import { useDispatch } from 'react-redux';
import style from './CatOrDogPage.module.scss'

const CatOrDogPage = () => {
  const dispatch = useDispatch();
  const handleOnClick = pet => {
    console.log('---pet: ', pet);
    // dispatch(push('/pet-form'));
  };
  return (
    <div className={style['cat-or-dog-page-wrapper']}>
      <div className="cat-or-dog-option" onClick={() => handleOnClick('cat')}>Cat</div>
      <div className="cat-or-dog-option" onClick={() => handleOnClick('dog')}>Dog</div>
    </div>
  );
};

export default CatOrDogPage;
