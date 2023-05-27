import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styling/StyleLifecycle';
import { envVars } from "../../../../config";

const apiNews = `${envVars.apiUrl}&apiKey=${envVars.apiKey}`;

class NewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: []
    };
    this.newsContRef = React.createRef();
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch(`${apiNews}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({ newsArticles: data.articles });
        this.renderArticles(data.articles);
      })
      .catch((err) => {
        console.log('Error fetching news:', err);
      });
  }

  renderArticles(articles) {
    const newsCont = this.newsContRef.current;
    newsCont.innerHTML = '';

    if (!articles.length) {
      newsCont.innerHTML = '<p>No articles found</p>';
      return;
    }

    articles.forEach((article, index) => { 
      const createdDate = new Date(article.publishedAt);
      const changetoString = `${createdDate.getDate()}/${createdDate.getMonth() + 1}/${createdDate.getFullYear()}`;

      const articleMarkup = `
        <div class="col-md-4" key="${index}">
          <div class="card mb-4 shadow-sm">
            <img src="${article.urlToImage}" alt="${article.title}">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p style="color: #909090;">${article.source.name}, ${article.author} - ${changetoString}</p>
                
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Read more...</a>
            </div>
          </div>
        </div>
      `;

      newsCont.insertAdjacentHTML('beforeend', articleMarkup);
    });
  }

  handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const { newsArticles } = this.state;
    const filteredArticles = newsArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    this.renderArticles(filteredArticles);
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <h1 className="text-center">Top Headlines in Technology Category</h1>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control searchNews"
                placeholder="Search News"
                aria-label="Search News"
                aria-describedby="button-addon2"
                onKeyUp={this.handleSearch}
              />
              <button className="btn btn-primary" type="button" id="button-addon2">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="row newsCont" id="news-articles" ref={this.newsContRef}></div>
      </div>
    );
  }
}

export default NewsComponent;