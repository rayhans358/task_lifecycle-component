import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/stylingComponent.css';
import { Col, Container, Row } from "react-bootstrap";

const ContentContainer = () => {
  return (
    <div className='stylingComponent'>
    <>
    <Container fluid="md" className="introduce" varian="dark" bg="dark" id="profil">
      <Row>
        <Col>
          <div class="p-5 mb-5 jumbotron">
            <div class="container-lfuid fy-5 text-center">
              <p class="fs-5 fst-italic mt-5">Student Eduwork</p>
              <h1 class="display-4">Rayhans Najib Al-farouq</h1>
              <button class="border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2" href="https://www.linkedin.com/in/rayhansnajib/">
                Likedin Profile
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row>
        <Col>
          <div class="container text-center mt-5" id="bio">
            <h2 class="fs-2"><b>My Bio</b></h2>
            <p class="fs-6 fst-italic fw-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row>
        <Col>
          <div className="text-center mt-5" id="learning">
            <h2 class="fs-2"><b>Learning</b></h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p className="text-center"><b>Plain CSS</b></p>
            <p>Memberikan CSS dengan cara di import.</p>
          </div>
        </Col>
        <Col>
          <div>
            <p className="text-center"><b>CSS Preprocessor</b></p>
            <li>SASS, PostCSS, Less.</li>
            <li>Memberikan CSS dengan gaya preprocessor.</li>
            <li>Membutuhkan dependency tambahan (node sass).</li>
            <p>Problems : Global Naming Scope.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p className="text-center"><b>Inline Style</b></p>
            <li>Memberikan CSS dengan gaya inline (langsung ke elemen HTML).</li>
            <li>Mengatasi problem global naming scope.</li>
            <li>Style harus berupa object javascript.</li>
            <p>Problems : Banyak style CSS yang tidak support, @media, @keyframes, :hover, Font & autoprefixer.</p>
          </div>
        </Col>
        <Col>
          <div>
            <p className="text-center"><b>CSS Module</b></p>
            <p>Membuat file css menjadi module.</p>
            <p>Problems : Jika halaman sudah terlalu besar. Proses debuggingnya menjadi sulit karena nama class yang dihasilkan random.</p>
          </div>
        </Col>
        <Col>
          <div>
            <p className="text-center"><b>CSSInJS</b></p>
              <li>Membuat komponen berdasarkan style.</li>
              <li>Membutuhkan dependency seperti styled component.</li>
              <li>Membuat styling jadi lebih rapi.</li>
          </div>
        </Col>
      </Row>
    </Container>
    </>
    </div>
  )
}

export default ContentContainer;