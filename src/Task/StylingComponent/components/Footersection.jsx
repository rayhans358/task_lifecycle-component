import 'bootstrap/dist/css/bootstrap.min.css';

const FooterSection = () => {
  const style = {
    height: "10vh",
    fontSize: "1,2rem",
    fontWeight: "400"
  }

  return (
    <>
    <div class="container-fluid bg-dark mt-5" style={style}>
      <footer>
        <p class="text-white text-center footer">&copy; 2023 eduwork, Rayhans Najib Al-Farouq</p>
      </footer>
    </div>
    </>
  )
}

export default FooterSection;