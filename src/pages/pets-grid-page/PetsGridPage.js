import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './PetsGridPage.module.scss';
import {fetchFoundPets, fetchLostPets} from '../../store/actions/petsActions';
import {filteredLostPets, getFoundPets, getIsLoading, getLostPets} from '../../store/selectors';
import Spinner from '../../components/spinner';
import Filter from '../../components/filter/Filter';
import {parseQuery} from '../../utils/helpers';

const PetsGridPage = ({history}) => {
  const dispatch = useDispatch();

  const foundPets = useSelector((state) => getFoundPets(state));
  const lostPets = useSelector((state) => filteredLostPets(state));
  const isLoading = useSelector((state) => getIsLoading(state));

  useEffect(() => {
    const {flow} = parseQuery(history.location.search);
    if(flow === 'lost'){
      dispatch(fetchFoundPets());
    }
    else if(flow === 'found'){
      dispatch(fetchLostPets());
    }
  }, []);

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
