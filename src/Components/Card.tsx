import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { animeType } from './Search';
import { increment as likesIncrement } from '../features/counter/likesSlice';
import { useSelector } from 'react-redux';
type likesType = {
    likes: { value: number }
}

export default function Cards(c: animeType) {
    const { value } = useSelector((state: likesType) => state.likes)
    console.log(c);
    return (
        <Card>
            <div className="card-img">
                <Card.Img variant="top" src={c.coverImage.medium} />
            </div>
            <Card.Body>
                <Card.Title className="card-title">{c.title.english}</Card.Title>
                <Card.Text className="cardDescription">
                    {c.description}
                </Card.Text>
            </Card.Body>
            <div className="btn-card-div">
                <Button variant="primary" className="btn-card-like" onClick={() => likesIncrement}>Like</Button>
                <p className="like-counter">{0 + value}</p>
                <Button variant="primary" className="btn-card-dislike">dislike</Button>
            </div>
        </Card>
    )
}
