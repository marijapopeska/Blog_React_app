import React from 'react'
import '../EmptyList/EmptyList.css'

const EmptyList = () => {
  return (
    <div className='empty-list'>
        <img src='/assets/images/empty-search.gif' alt='empty'/>
    </div>
  )
}

export default EmptyList