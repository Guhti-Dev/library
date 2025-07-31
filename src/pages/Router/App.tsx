import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/home';
import Book from '../Book/Book';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/book" element={ <Home /> } />
        <Route path="/book/:id" element={ <Book /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;