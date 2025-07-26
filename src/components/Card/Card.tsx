import { FaStar } from 'react-icons/fa';
import './index.css';

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

type CardProps = {
  bookInfo: Book;
};

export default function Card({ bookInfo }: CardProps) {

  function getTitleName(title: string, autor: string){
    var titleName = `${title} - ${autor}`;
    if (titleName.length > 40) {
      titleName = titleName.substring(0, 40) + '...';
    }
    return titleName.toUpperCase();
  }

  return (
    <>
      <a href={bookInfo.link} target="_blank" rel="noopener noreferrer" className="CardLink">
        <div className="Card">
          <div className="CardImage">
            <img src={bookInfo.image} alt={bookInfo.title} />
          </div>
          <div className="CardTitle">
            <p className='Title'>{getTitleName(bookInfo.title, bookInfo.autor)}</p>
          </div>
          <div className="CardDescription">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} style={{ color: index < bookInfo.rating ? 'gold' : '#ccc', fontSize: '10px' }} />
            ))}
          </div>
        </div>
      </a>
    </>
  )
}
