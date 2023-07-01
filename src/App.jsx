import { Route, Router } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
      <Router>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/:Id' element={<Homepage />}></Route>
      </Router>
    </>
  );
}

export default App;
