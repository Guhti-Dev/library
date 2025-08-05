import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './index.css';
import Comment from './Comment/comment';

export default function Book() {
    const { id } = useParams<{ id: string }>();
    const [showFullDescription, setShowFullDescription] = useState(false);

    let book = JSON.parse(localStorage.getItem('books') || '[]').find((b: { id: string }) => b.id === id);
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const description = book?.description || "";
    const isLongDescription = description.length > 800;
    const displayedDescription = showFullDescription ? description : description.slice(0, 800);

    type UserName = {
        first: string;
        middle: string;
        last: string;
    };

    type CommentType = {
        CommentId: number;
        userId: number;
        userName: UserName;
        profilePicture: string;
        rating: number;
        text: string;
    };

    return (
        <div className="bookPage">
            <div className="bookContainer">
                <div className="bookHeader">
                    <div className='bookImageContainer'>
                        <img src={book?.image} alt={book?.title} className="bookImage" />
                        <button className='reserveButton'>Reservar</button>
                        {user.role === 'admin' && (
                            <button className='deleteButton' onClick={() => {
                                const books = JSON.parse(localStorage.getItem('books') || '[]');
                                const updatedBooks = books.filter((b: { id: string }) => b.id !== id);
                                localStorage.setItem('books', JSON.stringify(updatedBooks));
                                window.history.back();
                            }}>Deletar</button>
                        )}
                    </div>
                    <div className="bookInfo">
                        <h1 className='titleBook'>{book?.title}</h1>
                        <div className='ratingContainer'>
                            <p className='avaliationsText'>Avaliação</p>
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} style={{ color: index < book?.rating ? 'gold' : '#ccc' }} />
                            ))}
                        </div>
                        <p className='descriptionBook'>
                            {displayedDescription}
                            {isLongDescription && !showFullDescription && '...'}
                        </p>
                        {isLongDescription && (
                            <button
                                className="toggleDescriptionButton"
                                onClick={() => setShowFullDescription(prev => !prev)}
                            >
                                {showFullDescription ? 'Ver menos' : 'Ver mais'}
                            </button>
                        )}

                        {book?.coment?.length > 0 && (
                            <div className="commentsSection">
                                <h3 className='commentText'>Comentários</h3>
                                {book.coment.map((comment: CommentType) => (
                                    <Comment key={comment.CommentId} comment={comment} />
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
