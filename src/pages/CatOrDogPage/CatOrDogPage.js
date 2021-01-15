import React from 'react';
import style from './CatOrDogPage.module.scss';
import {Link} from 'react-router-dom';

const CatOrDogPage = ({history}) => {
  // const dispatch = useDispatch();
  const handleOnClick = pet => {
    console.log('---pet: ', pet);
    history.push('/pet-form');
  };
  return (
    <div className={style['cat-or-dog-page-wrapper']}>
      <Link
        to="/lost-cat"
        className="lost-or-found-option">Cat</Link>
      <div className="lost-or-found-option" onClick={() => handleOnClick('dog')}>Dog</div>
    </div>
  );
};

export default CatOrDogPage;
