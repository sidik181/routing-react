import React, { useState } from 'react'

function SearchForm({onSearch}) {
	const [searchText, setSearchText] = useState('');

	const handleInputChange = (e)=> {
		setSearchText(e.target.value)
	}

	const handleFormSubmit = (e)=> {
		e.preventDefault();
		onSearch(searchText)
	}

	return (
		<div>
 				<form onSubmit={handleFormSubmit} className="d-flex" role="search">
 					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} value={searchText}></input>
 					<button className="btn btn-outline-success" type="submit">Search</button>
 				</form>
 			</div>
	)
}

export default SearchForm
