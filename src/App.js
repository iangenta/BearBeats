import Error404 from 'containers/errors/error404';
import Home from 'containers/pages/home'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Esto organiza todo
import store from 'store';
import { Provider } from 'react-redux';
// Aca se manejan todas las rutas 
// path='*' indica que si no existe la ruta a la que entramos, mostramos error404
function App() {
  return (
    <><Provider store={store}></Provider><Router>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Home />} />
      </Routes>

    </Router></>

  )
}

export default App;
