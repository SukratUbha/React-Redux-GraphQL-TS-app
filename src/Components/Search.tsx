import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import callAniList from '../api/AniList';
import { increment } from '../features/counter/counterSlice';
import Cards from './Card';
type counterType = {
  counter: { value: number }
}
export type animeType = {
  'id': number,
  'description': string,
  'coverImage': {
    'medium': string
  },
  'title': {
    'english': string
  }
}

export default function Search() {
  const { value } = useSelector((state: counterType) => state.counter)
  const [anime, setAnime] = useState<animeType[]>([]);
  const d = useDispatch();

  function MakeCards(): JSX.Element {
    if (anime !== undefined) {
      return <>{
        anime.map((a) => (
          <Cards {...a} key={a.id} />
        ))
      }</>
    }
    else {
      return <p>loading</p>
    }
  }

  useEffect(() => {
    const runCalls = async () => {
      const result = await callAniList();
      if (result !== undefined) {
        setAnime(result);
      }
    }
    runCalls();
  }, [])

  return (
    <div>
      <div>There are currently {value} items loaded</div>
      <Button onClick={() => d(increment())}>Search</Button>
      {/* <Cards { ...anime[0] }/> */}
      <div className="centered">
        <div className="cards">
          <MakeCards />
        </div>
      </div>
    </div>
  );
}

