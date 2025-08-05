import './home.css';
import Card from '../../components/Card/Card';
import Menu from './Menu/menu';
import dataJson from '../../data/books.json';
import { useEffect, useMemo, useState } from 'react';

type Book = {
  title: string;
  autor: string;
  year: number;
  genre: string;
  rating: number;
  id: string;
  image: string;
  description: string;
  link: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  // Carrega os livros do localStorage ou popula com os do JSON
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');

    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      localStorage.setItem('books', JSON.stringify(dataJson.books));
      setBooks(dataJson.books);
    }
  }, []);

  // Filtragem dos livros com base na busca
  const filteredBooks = useMemo(() => {
    if (!searchTerm.trim()) return books;

    const upperSearch = searchTerm.toUpperCase();
    return books.filter(book =>
      `${book.title} - ${book.autor}`.toUpperCase().includes(upperSearch)
    );
  }, [searchTerm, books]);

  // Embaralhamento dos livros filtrados
  const shuffledBooks = useMemo(() => {
    return [...filteredBooks].sort(() => Math.random() - 0.5);
  }, [filteredBooks]);

  return (
    <>
      <Menu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="Cards">
        {shuffledBooks.map(book => (
          <Card key={book.id} bookInfo={book} />
        ))}
      </div>
    </>
  );
}
