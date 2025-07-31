import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;