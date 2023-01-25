import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StuListing from './StuListing';
import StuCreate from './StuCreate';
import StuDetail from './StuDetail';
import StuEdit from './StuEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StuListing />}></Route>
          <Route path='/student/create' element={<StuCreate />}></Route>

          <Route path='/student/detail/:stuid' element={<StuDetail />}></Route>
          <Route path='/student/edit/:stuid' element={<StuEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
