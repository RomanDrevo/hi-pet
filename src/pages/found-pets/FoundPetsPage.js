import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './FoundPetsPage.module.scss';
import {fetchFoundPets} from '../../store/actions/petsActions';
import {getFoundPets} from '../../store/selectors';

const FoundPetsPage = () => {
  const dispatch = useDispatch();

  const foundPets = useSelector((state) => getFoundPets(state));

  console.log('-foundPets: ', foundPets);

  useEffect(() => {
    dispatch(fetchFoundPets());
  }, []);

  return(
    <div className={style['found-pets-page-wrapper']}>
            found!
    </div>
  );
};

export default FoundPetsPage;
