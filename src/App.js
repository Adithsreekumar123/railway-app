import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Addaccount from './component/Addaccount';
import View from './component/View';
import Book from './component/Book';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Addaccount/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/book' element={<Book/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
