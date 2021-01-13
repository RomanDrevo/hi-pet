import React from 'react';

const Navigation = ({currentScreen}) =>{
  return(
    <div className='navigation'>{currentScreen}</div>
  );
};

export default Navigation;
