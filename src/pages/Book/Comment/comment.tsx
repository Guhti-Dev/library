import { FaStar } from 'react-icons/fa';
import './index.css';

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

export default function Comment({ comment }: { comment: CommentType }) {
    return (
        <div className="commentDiv">
            <div className='userComment'>
                <img className="profilePicture" src={comment.profilePicture} alt={comment.userName.first} />
                <h3 className="userNameComment">{comment.userName.first} {comment.userName.last}</h3>
            </div>
            <div className="commentInfo">
                <div className="ratingContainer">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} style={{ color: index < comment.rating ? 'gold' : '#ccc' }} />
                    ))}
                </div>
                <div className='commentText'>
                    <p>{comment.text}</p>
                    <div />
                </div>
            </div>
        </div>
    );
}
