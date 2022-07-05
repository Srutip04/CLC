import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage'
import SimpleCard from './components/sign-in-form/sign-in-from';
import { Route,Routes } from 'react-router-dom';
import AdminCard from './components/sign-in-form/sign-in-admin';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<SimpleCard/>} />
      <Route exact path='/login-ad' element={<AdminCard/>} />

    
    </Routes>
    </div>
  );
}

export default App;
