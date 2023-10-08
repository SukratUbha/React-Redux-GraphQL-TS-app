import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { animeType } from './Search';
import { addLike as likesIncrement, stateType } from '../features/track/animeSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Cards(crd: animeType) {
    const dispatch = useDispatch();

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
                <Button variant="primary" className="btn-card-like" onClick={() => dispatch(likesIncrement(crd.id))} value={crd.id}>Like</Button>
                {/* <p className="like-counter">{value[crd.id] ?? 0}</p> */}
                <Button variant="primary" className="btn-card-dislike">dislike</Button>
            </div>
        </Card>
    )
}
