import React, {useContext} from 'react'
import Icons from '../Icons/Icons';
import { FaSearch } from 'react-icons/fa';
import { GlobalContext } from '../../Context/CartContext';
import './styleSearch.css';

const Search = () => {

  const {search, setSearch} = useContext (GlobalContext);


  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log (e.target.value);
  }

  return (
    <>
      <form className="d-flex input-group w-auto my-auto mb-3 formSearch">
        <input value={search} onChange={handleChange} type="search" className="form-control" placeholder="Búsqueda" />
        <span className="border-0 d-flex justify-content-center align-items-center ml-1">
          <Icons Icon={FaSearch} color={"FFFFFF"} size={"18px"} />
        </span>
      </form>
    </>
  )
}

export default Search