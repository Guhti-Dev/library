import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/home';
import Book from '../Book/Book';
import AddBook from '../AddBook/AddBook';

function App() {
  const isAuthenticated = localStorage.getItem("user") !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="*" element={ <Login /> } />
        <Route path="/book" element={ isAuthenticated ? <Home /> : <Login /> } />
        <Route path="/book/:id" element={ isAuthenticated ? <Book /> : <Login /> } />
        <Route path="/addBook" element={ isAuthenticated ? <AddBook /> : <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;