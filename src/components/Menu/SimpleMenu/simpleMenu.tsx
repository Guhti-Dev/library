import { useState, useRef, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './menu.css';

export default function SimpleMenu() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function logOut() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className='menuComponent'>
      <a href='/'><img src={logo} alt="Logo" className='logo' /></a>
      <div ref={ref} className="userDropdown">
        <button
          className="userTrigger"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          <div className="userMenu">
            <p className="userName">{user.userName.first}</p>
            <img src={user.imageProfile} alt="Avatar" className="userAvatar" />
          </div>
        </button>

        {open && (
          <div className="dropdownMenu">
            { user.role === 'admin' && (<Link to="/addBook" className="dropdownItem">Cadastrar Livros</Link>)}
            <button onClick={logOut} className="dropdownItem">Sair</button>
          </div>
        )}
      </div>
    </div>
  );
}