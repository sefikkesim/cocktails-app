import React from 'react'
import { useAppContext } from '../context'

const SearchForm = () => {
  const {SetSearchTerm,searchTerm} = useAppContext()
  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default SearchForm
