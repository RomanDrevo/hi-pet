import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';

const Navigation = ({currentScreen, history}) =>{
  useEffect(() => {
    console.log(history);
    const currentLocation = history.location.pathname;
    // switch (currentLocation){
    //   case "":
    // }
  }, []);
  return(
    <div className='navigation'>{currentScreen}</div>
  );
};

export default withRouter(Navigation);
