import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import Loading from './Loading'
import Error from './Error'
import Card from './Card'

const apiKey = 'e691691c1281499c9a5dd08b418c94c2'

function News() {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchNews = () => {
		const apiUrl = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`
		try {
			const res = axios.get(apiUrl)
			setNews(res.data.articles)
			setIsLoading(false)
			setError(null)
		} catch (error) {
			setNews([])
			setIsLoading(false)
			setError('Gagal mengambil data berita')
		}
	}

	const fetchNewsWithSearch = async (searchText) => {
		const searchUrl = `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`

		try {
			const res = axios.get(searchUrl)
			setNews(res.data.articles)
			setIsLoading(false)
			setError(null)
		} catch (error) {
			setNews([])
			setIsLoading(false)
			setError('Gagal mengambil data berita:', error)
		}
	}

	useEffect(() => {
		fetchNews()
	}, [])

	return (
		<div className=''>
			<SearchForm onSearch={fetchNewsWithSearch()} />
			<h2 className='header-title mt-3'>Latest News</h2>
			<div className='row'>
				{isLoading && <Loading />}
				{error && <Error />}
				{news.map((news, index) => (
					<div className='col-3 mb-3 mt-2'>
						<Card key={index} news={news} />
					</div>
				))}
			</div>
		</div>
	)
}

export default News
