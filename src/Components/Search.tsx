import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { runCalls } from './Home'
import { setAnime } from '../features/anime/animeSlice'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'

export default function Search() {
  const txt = useRef<string>();
  const dispatch = useDispatch();
  const makeSearch = () => {
    if (txt.current !== undefined) {
      runCalls(txt.current).then((res) => {
        if (res !== undefined && res.length > 0) {
          dispatch(setAnime(res));
        }
      })
    }
  }
  return (
    <div className="search-box">
      <button className="btn-search"><i className="fas fa-search"></i><FontAwesomeIcon icon={faSearch} onClick={() => { makeSearch() }} /></button>
      <input type="text" className="input-search" placeholder="Type to Search..." onChange={(e) => { txt.current = e.target.value }} />
    </div>
  )
}
