//import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { animeType } from './Search';

export default function Cards(c: animeType) {
    return (
            <Card className="card" >
                <Card.Img variant="top" src={c.coverImage} />
                <Card.Body>
                    <Card.Title>{ c.title.english }</Card.Title>
                    <Card.Text className="cardDescription">
                        { c.description }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    )
}
