import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './PetsGridPage.module.scss';
import {fetchFoundPets, fetchLostPets} from '../../store/actions/petsActions';
import {getCurrentFlow, getFoundPets, getIsLoading, getLostPets} from '../../store/selectors';
import Spinner from '../../components/spinner';
import Filter from '../../components/filter/Filter';

const PetsGridPage = () => {
  const dispatch = useDispatch();

  const foundPets = useSelector((state) => getFoundPets(state));
  const lostPets = useSelector((state) => getLostPets(state));
  const currentFlow = useSelector((state) => getCurrentFlow(state));
  const isLoading = useSelector((state) => getIsLoading(state));

  console.log('-foundPets: ', foundPets);
  console.log('-lostPets: ', lostPets);
  console.log('-currentFlow: ', currentFlow);

  const [petsArr, setPetsArr] = useState([]);

  console.log('-petsArr: ', petsArr);

  useEffect(() => {
    if(foundPets){
      setPetsArr(foundPets);
    }
    else if(lostPets){
      setPetsArr(lostPets);
    }
  }, []);

  useEffect(() => {
    if(currentFlow === 'lost'){
      dispatch(fetchFoundPets());
    }
    else if(currentFlow === 'found'){
      dispatch(fetchLostPets());
    }
  }, [currentFlow]);

  if(isLoading) return <Spinner />;

  return(
    <div className={style['pets-grid-page-wrapper']}>
      <Filter />
      <div className='pets-grid'>
        {
          foundPets && foundPets.map((pet, i) => (
            <div className='pet-item' key={i}>
              <img src={pet.imageUrl} />
            </div>
          ))
        }

        {
          lostPets && lostPets.map((pet, i) => (
            <div className='pet-item' key={i}>
              <img src={pet.imageUrl} />
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default PetsGridPage;
