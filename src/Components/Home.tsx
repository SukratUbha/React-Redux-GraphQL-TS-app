import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import callAniList from '../api/AniList';
import { setAnime } from '../features/anime/animeSlice'
import Cards from './Card';
import { RootState } from '../features/store'

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
  const an = useSelector((state:RootState) => state.anime.anime)
  
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

