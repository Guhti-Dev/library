import './index.css'
import './../../index.css'
import Logo from './../../assets/logo.png';
import { useState } from 'react';

export default function Login() {

  const [cpf, setCpf] = useState('');

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 14) {
      return;
    }

    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(value);
  };

  return (
    <div className='Root'>
      <img className='Logo' src={Logo} alt="Logo" />
      <h5 className='TitleLogin'>Usuário</h5>
      <input  
      className='CpfInput' 
      type="text" 
      placeholder="CPF" 
      onChange={ (e) => handleCpfChange(e)}
      value={cpf}/>
      <button className='LoginBtn'>Entrar</button>
    </div>
  );
}