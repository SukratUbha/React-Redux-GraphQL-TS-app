import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { animeType } from './Search';
import { increment as likesIncrement } from '../features/counter/likesSlice';
import { useSelector, useDispatch } from 'react-redux';
type likesType = {
    likes: { value: number }
}

export default function Cards(crd: animeType) {
    const { value } = useSelector((state: likesType) => state.likes)
    const d = useDispatch();

    return (
        <Card>
            <div className="card-img">
                <Card.Img variant="top" src={crd.coverImage.medium} />
            </div>
            <Card.Body>
                <Card.Title className="card-title">{crd.title.english ? crd.title.english : crd.title.romaji}</Card.Title>
                <Card.Text className="cardDescription">
                    {crd.description}
                </Card.Text>
            </Card.Body>
            <div className="btn-card-div">
                <Button variant="primary" className="btn-card-like" onClick={() => d(likesIncrement())}>Like</Button>
                <p className="like-counter">{value}</p>
                <Button variant="primary" className="btn-card-dislike">dislike</Button>
            </div>
        </Card>
    )
}
