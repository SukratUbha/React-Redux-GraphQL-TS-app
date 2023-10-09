import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { animeType } from './Home';
import { addLike, dislike } from '../features/anime/animeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../features/store';

export default function Cards(crd: animeType) {
    const dispatch = useDispatch();
    const value = useSelector((state:RootState) => state.anime.lCounter)

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
                <Button variant="primary" className="btn-card-like" onClick={() => dispatch(addLike(crd.id))}>Like</Button>
                <p className="like-counter">{value[crd.id] ?? 0}</p>
                <Button variant="primary" className="btn-card-dislike" onClick={() => dispatch(dislike(crd.id))}>dislike</Button>
            </div>
        </Card>
    )
}
