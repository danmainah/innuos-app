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
    <div>
      { condition === false ? <button onClick={renderer}>GET ALBUMS </button> : <Home /> }
    </div>
  );
}

export default App;