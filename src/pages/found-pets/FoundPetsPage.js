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
      <div className='pets-grid'>
        {
          foundPets.map((pet, i) => (
            <div className='pet-item' key={i}>
              <img src={pet.imageUrl} />
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default FoundPetsPage;
