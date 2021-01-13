import React from 'react';
import  './css/App.scss';
import {connect, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import {capitalizeFirstLetter} from './utils/helpers';
import ModalWindow from './components/modal-window/ModalWindow';
import {getCurrentScreen, getErrorObject, getIsErrorWindowOpen} from './store/selectors';
import {toggleErrorWindowIsOpen} from './store/actions/uIStateActions';
import LostOrFoundPage from './pages/lost-or-found-page/LostOrFoundPage';
import CatOrDogPage from './pages/cat-or-dog-page/CatOrDogPage';
import FoundPetsPage from './pages/found-pets/FoundPetsPage';
import Navigation from "./components/navigation/Navigation";

const App = ({isErrorWindowOpen, errorObject, toggleErrorWindowIsOpen}) => {

  const handleErrorModalCancel = () => {
    toggleErrorWindowIsOpen();
  };



  return (
    <div className='app-wrapper'>
      <ModalWindow
        visible={isErrorWindowOpen}
        title={capitalizeFirstLetter(errorObject.title)}
        message={errorObject.message}
        handleErrorModalCancel={handleErrorModalCancel}
      />
      <div className="main-page-content">
        {/*{*/}
        {/*  currentScreen && <Navigation currentScreen={currentScreen} />*/}
        {/*}*/}

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
