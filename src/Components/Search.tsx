import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import callAniList from '../api/AniList';
import { setAnime, stateType } from '../features/track/animeSlice'
import Cards from './Card';

export type animeType = {
  'id': number,
  'description': string,
  'coverImage': {
    'medium': string
  },
  'title': {
    'english': string,
    'romaji':string
  }
}

export default function Search() {
  const dispatch = useDispatch();
  const an = useSelector((state: any) => state.anime.anime)
  // console.log('length '+an.length)
  
  function MakeCards(): JSX.Element {
    if (an.length) {
      return <>{
        an.map((a:animeType) => (
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
        dispatch(setAnime(result))
      }
    }
    runCalls()
  }, [dispatch])

  return (
    <div>
      {/* <div>There are currently {value} items loaded</div> */}
      <Button>Search</Button>
      <div className="centered">
        <div className="cards">
          <MakeCards />
        </div>
      </div>
    </div>
  );
}

