import React, { Component } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import Card from './Card'

const apiKey = 'e691691c1281499c9a5dd08b418c94c2'

export default class News extends Component {
	constructor(props) {
		super(props)
		this.state = {
			news: [],
			loading: true,
			error: false,
		};
		
		this.fetchNewsWithSearch = this.fetchNewsWithSearch.bind(this)
	}

	componentDidMount() {
		this.fetchNews()
	}

	fetchNews() {
		const apiUrl = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

		axios.get(apiUrl)
			.then(response => {
				this.setState({
					news: response.data.articles,
					loading: false,
					error: null,
				});
			})
			.catch(error => {
				this.setState({
					news: [],
					loading: false,
					error: 'Gagal mengambil data berita'
				})
			})
	}

	async fetchNewsWithSearch(searchText) {
		const searchUrl = `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`;

		await axios.get(searchUrl)
			.then(response => {
				this.setState({
					news: response?.data?.articles,
					loading: false,
					error: null,
				});
			})
		.catch(error => {
			this.setState({
			  news: [],
			  loading: false,
			  error: 'Gagal mengambil data berita',
			});
		});
	}

	render() {
		const { news, loading, error } = this.state;

		if (loading) {
			return (
				<div className='mt-5'>
					<h2 className='header-title'>Latest News</h2>
					<p>Loading...</p>
				</div>
			)
		}

		if (error) {
			return (
				<div className='mt-3'>
					<h2 className='header-title'>Latest News</h2>
					<p className='--bs-danger'>{error}</p>
				</div>
			)
		}

		return (
			<div className=''>
				<SearchForm onSearch={this.fetchNewsWithSearch} />
				<h2 className='header-title mt-3'>Latest News</h2>
				<div className='row'>
					{news.map((news, index) => (
						<div className='col-3 mb-3 mt-2'>
							<Card key={index} news={news} />
						</div>
					))}
				</div>
			</div>
		)
	}
}
