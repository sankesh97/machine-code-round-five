import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import SingleReceipe from './Pages/SingleReceipe';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/:receipeId' element={<SingleReceipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
