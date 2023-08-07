import React, {Component} from 'react'

export class Card extends Component {
	render() {
		const {news} = this.props;
		return (
			<div className="col">
				<div className="card" style={{width: "18rem"}} >
					<img src={news.urlToImage} className="card-img-top" alt={news.urlToImage}></img>
					<div className="card-body">
						<h5 className="card-title">{news.title}</h5>
						<p className="card-text">{news.title}</p>
						<a href={news.url} className="btn btn-primary">Baca</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Card
