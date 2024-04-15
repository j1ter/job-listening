import React from 'react';
import AdvertisementForm from './components/AdvertisementForm';
import AdvertisementList from './components/AdvertisementList';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Advertisement Board</h1>
        <AdvertisementForm />
        <AdvertisementList />
      </div>
    </Provider>
  );
};

export default App;
