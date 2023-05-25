import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/StylingLifecycle.css';

const ContentContainer = () => {
  return (
    <div className='stylingComponent'>
      <>
        <div className="container">
          <div className="row mt-2">
            <div className="col">
              <h1 className="text-center">Top Headlines in Technology Category</h1>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <div className="input-group mb-3">
                <input type="text" className="form-control searchNews" placeholder="Search News" aria-label="Search News" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
              </div>
            </div>
          </div>

          <div className="row newsCont" id="news-articles">
            <div className="col-12"></div>
          </div>
        </div>
      </>
    </div>
  )
}

export default ContentContainer;