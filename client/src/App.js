import logo from './logo.svg';
import './App.css';
import Homepage1 from './Pages/Homepage1'
import SimpleCard from './components/sign-in-form/sign-in-from';
import { Route,Routes } from 'react-router-dom';
import AdminCard from './components/sign-in-form/sign-in-admin';
import Homepage2 from './Pages/Homepage2';
import Homepage3 from './Pages/Homepage3';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Homepage1/>}/>
      <Route exact path='/login' element={<Homepage2/>} />
      <Route exact path='/login-ad' element={<Homepage3/>} />

    
    </Routes>
    </div>
  );
}

export default App;
