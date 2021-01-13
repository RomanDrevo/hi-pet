import React from 'react';
import style from './CatOrDogPage.module.scss';

const CatOrDogPage = ({history}) => {
  // const dispatch = useDispatch();
  const handleOnClick = pet => {
    console.log('---pet: ', pet);
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
