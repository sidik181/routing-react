import React from "react";
import { showCards } from "../Model/Card.js";

const apiKey = 'f5b5440fd2994ecdaf90d770b0373fa0';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };

  }
  
  
  async componentDidMount() {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=${apiKey}`
    );
    let data = await res.json();
    let cards = '';
    data.forEach(m => cards += showCards(m));
    const newsContainer = document.getElementById("app");
    newsContainer.innerHTML = cards;
  };
}

export default News;
