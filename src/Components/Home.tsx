import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';
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
export const runCalls = async (name:string) => {
  const result = await callAniList(name);
  if (result !== undefined) {
    return result
  }
}

export default function Home() {
  const an = useSelector((state:RootState) => state.anime.anime)
  const dispatch = useDispatch();
  
  function MakeCards(): JSX.Element {
    if (an.length) {
      return <>{
        an.map((a:animeType) => (
          <Cards {...a} key={a.id} />
        ))
      }</>
    }
    else {
      return(
      <Spinner className='spinner' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
    }
  }

  useEffect(() => {
    // const runCalls = async () => {
    //   const result = await callAniList('');
    //   if (result !== undefined) {
    //     dispatch(setAnime(result))
    //   }
    // }
    runCalls('').then((r)=>{
      if(r !== undefined) {
        dispatch(setAnime(r));
      }
    })
  }, [dispatch])

  return (
    <div className='home'>
      <div className="centered">
        <div className="cards">
          <MakeCards />
        </div>
      </div>
    </div>
  );
}

