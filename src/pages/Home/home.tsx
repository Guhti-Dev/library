import './home.css';
import Card from '../../components/Card/Card';
import Menu from './Menu/menu';
import data from '../../data/books.json';
import { useState } from 'react';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  function filteredBooks() {
    if (searchTerm === '') {
      return data.books;
    }
    return data.books.filter(book => (book.title + ' - ' + book.autor).toUpperCase().includes(searchTerm.toUpperCase()));
  }

  return (
    <>
      <Menu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="Cards">
        {filteredBooks()
          .sort(() => Math.random() - 0.5)
          .map((filteredBook) => (
            <Card key={filteredBook.id} bookInfo={filteredBook} />
          ))}
      </div>
    </>
  );
}