import { Routes,Route } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Users from './components/Users';
function App() {
  return (
    <div className="App font-semibold text-[30px]">
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
