import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <div className="search-box">
      
      <button className="btn-search"><i className="fas fa-search"></i><FontAwesomeIcon icon={faSearch} /></button>
      <input type="text" className="input-search" placeholder="Type to Search..." />
    </div>
  )
}
