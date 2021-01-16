import React from 'react';
import  './css/App.scss';
import {connect, useSelector} from 'react-redux';
import {Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import {capitalizeFirstLetter} from './utils/helpers';
import ModalWindow from './components/modal-window/ModalWindow';
import {getCurrentFlow, getErrorObject, getIsErrorWindowOpen} from './store/selectors';
import {toggleErrorWindowIsOpen} from './store/actions/uIStateActions';
import LostOrFoundPage from './pages/lost-or-found-page/LostOrFoundPage';
import LostCat from './pages/lostCat';
import Navigation from './components/navigation/Navigation';
import PetsGridPage from './pages/pets-grid-page/PetsGridPage';

const App = ({isErrorWindowOpen, errorObject, toggleErrorWindowIsOpen}) => {

  const handleErrorModalCancel = () => {
    toggleErrorWindowIsOpen();
  };

  const currentFlow = useSelector(state => getCurrentFlow(state));

  return (
    <div className='app-wrapper'>
      <ModalWindow
        visible={isErrorWindowOpen}
        title={capitalizeFirstLetter(errorObject.title)}
        message={errorObject.message}
        handleErrorModalCancel={handleErrorModalCancel}
      />
      <div className="main-page-content">
        {
          currentFlow && <Navigation currentFlow={currentFlow} />
        }
        <Switch>
          <ProtectedRoute path='/' exact component={LostOrFoundPage}/>
          <ProtectedRoute path='/pets' exact component={PetsGridPage}/>
          <ProtectedRoute path='/lost-cat' exact component={LostCat}/>          {/* <Route path='/login' exact component={LoginPage}/>*/}
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
