import './menu.css';
import logo from '../../../assets/logo.png';

interface MenuProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Menu({ searchTerm, setSearchTerm }: MenuProps) {
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
      <div className='userMenu'>
        <p className='userName'>Gustavo</p>
        <img src="https://github.com/Guhti-Dev.png" alt="User Avatar" className='userAvatar' />
      </div>
    </div>
  );
}