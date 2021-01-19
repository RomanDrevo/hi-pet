import React from 'react';
import {Checkbox} from 'antd';
import style from './Filter.module.scss';
import {useDispatch} from 'react-redux';
import {setFilterPetColor, setFilterPetType} from '../../store/actions/filtertsActions';
import {colorOptions, petOptions} from '../../utils/constatns';

const Filter = () => {
  const dispatch = useDispatch();
  return(
    <div className={style['pets-filter-wrapper']}>
      <h2>FILTER</h2>
      <div className='filter-group'>
        <div className='filter-group-title'>Pet:</div>
        <Checkbox.Group options={petOptions} onChange={petType => dispatch(setFilterPetType(petType))} />
      </div>

      <div className='filter-group'>
        <div className='filter-group-title'>Color:</div>
        <Checkbox.Group options={colorOptions} onChange={color => dispatch(setFilterPetColor(color))} />
      </div>
    </div>
  );
};

export default Filter;
