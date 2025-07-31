import { useParams } from 'react-router-dom';
import data from '../../data/books.json';

export default function Book() {
    const { id } = useParams<{ id: string }>();
    const book = data.books.find(b => String(b.id) === id);

    return (
        <div>
            <h1>{book?.title}</h1>
            <p>{book?.description}</p>
            <p>Year: {book?.year}</p>
        </div>
    );
}