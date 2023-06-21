import React from 'react'
import '../SearchBar/SearchBar.css'

const SearchBar = ({ onSubmit, onChange, clearSearch, value }) => {
  return (
    <div className='searchBar'>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='Search By Category'
        />
        {value.length > 0 ? <span onClick={clearSearch}>X</span> : null}
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar