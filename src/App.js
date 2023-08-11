import React from 'react';
import 'tailwind-merge'
import 'tailwindcss'
import Home from './containers/pages/home'; 
import './App.css';
import './assets/styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>

            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
