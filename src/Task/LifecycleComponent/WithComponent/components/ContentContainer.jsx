import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/StyleLifecycle.css';

export default class ContentContainer extends React.Component {

  render() {
    const { articles, error, handleSearch, fetchNews } = this.props;

    return (
      <div className="container mt-3">
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='input-group mb-3'>
              <input 
                type="text"
                className='form-control'
                placeholder='Search news...'
                onChange={handleSearch} 
              />
              <button
                className='btn btn-primary'
                type='button'
                onClick={fetchNews}> Search
              </button>
            </div>
            {error && <div className='alert alert-danger'>{error}</div>}
            {articles.length > 0 ? (
              <ul className='list-group'>
                {articles.map((article, index) => (
                  <li className='list-group-item' key={index}>
                    <h5>{article.title}</h5>
                    <p>{article.description}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}