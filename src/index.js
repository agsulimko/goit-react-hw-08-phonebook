import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {' '}
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);

//  <PersistGate loading={null} persistor={persistor}>
//    <App />
//  </PersistGate>;

//  <BrowserRouter>
//    <Provider store={store}>
//      <PersistGate loading={null} persistor={persistor}>
//        <App />
//      </PersistGate>
//    </Provider>
//  </BrowserRouter>;
