import React, { useEffect, useState, useRef } from 'react';

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0f7b330cb3e047c0b412d11043ea08c3`;

const NewsComponent = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const newsContRef = useRef(null);
  
  useEffect(() => {
    const callAPI = () => {
      fetch(apiUrl)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setNewsArticles(data.articles);
          renderArticles(data.articles);
        })
        .catch((err) => {
          console.log('Error fetching news:', err);
        });
    };
  
    callAPI();
  }, []);

  const renderArticles = (articles) => {
    const newsCont = newsContRef.current;
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
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredArticles = newsArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    renderArticles(filteredArticles);
  };

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
              onKeyUp={handleSearch} // Menggunakan event listener onKeyUp untuk live search
            />
            <button className="btn btn-primary" type="button" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row newsCont" id="news-articles" ref={newsContRef}></div>
    </div>
  );
};

export default NewsComponent;
