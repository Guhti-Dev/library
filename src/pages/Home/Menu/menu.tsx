import './menu.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

interface MenuProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Menu({ searchTerm, setSearchTerm }: MenuProps) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

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
      {user.role === "admin" && <Link to="/addBook"><button className='addBookButton'>Cadastrar Livros</button></Link>}
      <Link to={user.linkGithub} className='menuLink'>
        <div className='userMenu'>
          <p className='userName'>{user.name.first}</p>
          <img src={user.imageProfile} alt="User Avatar" className='userAvatar' />
        </div>
      </Link>
    </div>
  );
}