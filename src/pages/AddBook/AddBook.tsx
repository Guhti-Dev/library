import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import data from '../../data/books.json';
import SimpleMenu from '../../components/Menu/SimpleMenu/simpleMenu';

export default function AddBook() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    autor: '',
    year: '',
    genre: '',
    description: '',
    rating: '',
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Gera novo ID com base no maior ID atual
    const localBooks = JSON.parse(localStorage.getItem('books') || '[]');
    const allBooks = [...data.books, ...localBooks];
    const lastId = allBooks.length > 0 ? Math.max(...allBooks.map(book => parseInt(book.id))) : 0;

    const newBook = {
      id: (lastId + 1).toString(),
      title: formData.title,
      autor: formData.autor,
      year: parseInt(formData.year) || new Date().getFullYear(),
      genre: formData.genre,
      description: formData.description,
      rating: parseInt(formData.rating) || 0,
      image: formData.image || '',
      link: '',
      coment: []
    };

    const updatedBooks = [...localBooks, newBook];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    navigate('/');
  };

  return (
    <>
      <SimpleMenu/>
      <div className='add-book-Form-Div'>
        <form className='add-book-Form' onSubmit={handleSubmit}>
          <div className='titleDiv'>
            <h1 className='titleName'>Cadastro de Livros</h1>
          </div>
          <input name="title" type="text" placeholder="Título" className="add-book-Input" onChange={handleChange} required />
          <input name="autor" type="text" placeholder="Autor" className="add-book-Input" onChange={handleChange} required />
          <input name="year" type="number" placeholder="Ano" className="add-book-Input" onChange={handleChange} />
          <input name="genre" type="text" placeholder="Gênero" className="add-book-Input" onChange={handleChange} />
          <input name="description" type="text" placeholder="Descrição" className="add-book-Input" onChange={handleChange} />
          <input name="image" type="text" placeholder="URL da Imagem" className="add-book-Input" onChange={handleChange} />
          <input name="rating" type="number" placeholder="Nota (0-5)" min="0" max="5" className="add-book-Input" onChange={handleChange} />
          <div className='buttons'>
            <button type="submit" className='add-book-Button'>Cadastrar</button>
            <button type="reset" onClick={() => navigate('/')} className='cancel-book-Button'>Cancelar</button>
          </div>
        </form>
      </div>
    </>

  );
}
