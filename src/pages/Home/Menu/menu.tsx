import { useState, useRef, useEffect } from 'react';
import logo from '../../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './menu.css';

interface MenuProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Menu({ searchTerm, setSearchTerm }: MenuProps) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Fecha dropdown se clicar fora
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
    navigate("/");
  }

  return (
    <div className='menuComponent'>
      <img src={logo} alt="Logo" className='logo' />
      <input
        type="text"
        placeholder="Pesquisar"
        className='searchInput'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div ref={ref} className="userDropdown">
        <button
          className="userTrigger"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          <div className="userMenu">
            <p className="userName">{user.name?.first}</p>
            <img src={user.imageProfile} alt="Avatar" className="userAvatar" />
          </div>
        </button>

        {open && (
          <div className="dropdownMenu">
            <Link to="/profile" className="dropdownItem">Meu Perfil</Link>
            <Link to="/settings" className="dropdownItem">Configurações</Link>
            { user.role === 'admin' && (
              <Link to="/addBook" className="dropdownItem">Cadastrar Livros</Link>
            )}
            <button onClick={logOut} className="dropdownItem">Sair</button>
          </div>
        )}
      </div>
    </div>
  );
}