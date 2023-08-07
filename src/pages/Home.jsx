import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'

export default class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<News />
			</>
		)
	}
}
