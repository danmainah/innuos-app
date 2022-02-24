import './App.css';
import Home from './components/Home';
import { useState } from 'react';

const App = () => {
  const [condition, setCondition] = useState(false);
  function renderer(e){
    setCondition(true);
    e.preventDefault();
  }
  return (
    <div className="d-flex justify-content-center m-5 mt-5">
      { condition === false ? <button className="btn btn-light text-white bg-dark border-warning" onClick={renderer}>GET ALBUMS </button> : <Home /> }
    </div>
  );
}

export default App;