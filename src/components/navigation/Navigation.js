import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import {parseQuery} from "../../utils/helpers";

const Navigation = ({ history}) =>{
  const [title, setTitle] = useState('')
  useEffect(() => {
    const {flow} = parseQuery(history.location.search);
    if(flow === 'found'){
      setTitle('Lost pets');
    }
    else if(flow === 'lost'){
      setTitle('Found pets')
    }
  }, []);
  return(
    <div className='navigation'>{title}</div>
  );
};

export default withRouter(Navigation);
