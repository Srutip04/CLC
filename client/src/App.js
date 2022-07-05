import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage'
import SimpleCard from './components/sign-in-form/sign-in-from';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<SimpleCard/>} />
    
    </Routes>
    </div>
  );
}

export default App;
