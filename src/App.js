import React from 'react';
import style from './css/App.scss';
import {connect} from 'react-redux';
import {Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import {capitalizeFirstLetter} from './utils/helpers';
import ModalWindow from './components/modal-window/ModalWindow';
import {getErrorObject, getIsErrorWindowOpen} from './store/selectors';
import {toggleErrorWindowIsOpen} from './store/actions/uIStateActions';
import LostOrFoundPage from './pages/LostOrFoundPage/LostOrFoundPage';
import CatOrDogPage from './pages/CatOrDogPage/CatOrDogPage';
import FoundPetsPage from './pages/found-pets/FoundPetsPage';

const App = ({isErrorWindowOpen, errorObject, toggleErrorWindowIsOpen}) => {

  const handleErrorModalCancel = () => {
    toggleErrorWindowIsOpen();
  };

  return (
    <div className={style['app-wrapper']}>
      <ModalWindow
        visible={isErrorWindowOpen}
        title={capitalizeFirstLetter(errorObject.title)}
        message={errorObject.message}
        handleErrorModalCancel={handleErrorModalCancel}
      />
      <div className="main-page-content">
        <Switch>
          <ProtectedRoute path='/' exact component={LostOrFoundPage}/>
          <ProtectedRoute path='/choose-pet' exact component={CatOrDogPage}/>
          <ProtectedRoute path='/found-pets' exact component={FoundPetsPage}/>
          {/* <Route path='/login' exact component={LoginPage}/>*/}
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isErrorWindowOpen: getIsErrorWindowOpen(state),
    errorObject: getErrorObject(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleErrorWindowIsOpen: () => dispatch(toggleErrorWindowIsOpen()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
