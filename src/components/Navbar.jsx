import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand fs-3 fw-bold" href="/">Liputan 6 News</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<span className="nav-link active" aria-current="page" ><Link to={'/'}>Home</Link></span>
							</li>
							<li className="nav-item">
								<span className="nav-link active" aria-current="page" ><Link to={'/login'}>Login</Link></span>
							</li>
							<li className="nav-item">
								<span className="nav-link active" aria-current="page" ><Link to={'/register'}>Register</Link></span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
