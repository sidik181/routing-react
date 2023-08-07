import React, { Component } from 'react'

export default class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
		};
	}

	handleInputChange = (e) => {
		this.setState({
			searchText: e.target.value,
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSearch(this.state.searchText);
	}

	
	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit} className="d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleInputChange} value={this.state.searchText}></input>
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		)
	}
}
