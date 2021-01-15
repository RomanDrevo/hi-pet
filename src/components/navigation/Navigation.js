import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const Navigation = ({currentFlow, history}) =>{
  useEffect(() => {
    console.log(history);
    const currentLocation = history.location.pathname;
    // switch (currentLocation){
    //   case "":
    // }
  }, []);
  return(
    <div className='navigation'>{currentFlow === 'lost' ? 'Found' : currentFlow === 'found' ? 'Lost' : ''} pets</div>
  );
};

export default withRouter(Navigation);
