import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import callAniList from '../api/AniList';
import { increment } from '../features/counter/counterSlice';
import Cards from './Card';

type counterType = {
  counter: { value: number }
}
type animeType = {
  'coverImage': string,
  'id': number,
  'title': {
      'english': string
  }
}

export default function Search() {
  const { value } = useSelector((state: counterType) => state.counter)
  const [anime, setAnime] = useState<animeType[]>([]);
  const d = useDispatch();

  useEffect(() => {
    const runCalls = async () => {
      const result = await callAniList();
      if(result != undefined) {
        setAnime(result);
      }
    }
    runCalls()
  }, [anime])


  return (
    <div>
      <div>There are currently {value} items loaded</div>
      <Button onClick={() => d(increment())}>Search</Button>
      <Cards />
    </div>
  );
}

