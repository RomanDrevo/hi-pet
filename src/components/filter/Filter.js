import React from 'react';
import {Checkbox} from 'antd';
import style from './Filter.module.scss';

const petOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
];

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'White', value: 'white' },
  { label: 'Ginger', value: 'ginger' },
];

const Filter = () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  return(
    <div className={style['pets-filter-wrapper']}>
      <h2>FILTER</h2>
      <div className='filter-group'>
        <div className='filter-group-title'>Pet:</div>
        <Checkbox.Group options={petOptions} onChange={onChange} />
      </div>

      <div className='filter-group'>
        <div className='filter-group-title'>Color:</div>
        <Checkbox.Group options={colorOptions} onChange={onChange} />
      </div>

    </div>
  );
};

export default Filter;
