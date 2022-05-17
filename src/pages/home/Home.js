
import "./Home.css"
function Home() {
    return (
      <div className="home">
        <a  className="link-card" href="/albuns">
        <div className="cards">
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/tiao-app.appspot.com/o/298858.png?alt=media&token=5e60427a-468b-4ddc-acbc-242d6e634296" alt="albuns"/>
        <p className="text-card">Albums</p>
        </div>
        </a>
        <a className="link-card" href="/">
        <div className="cards">
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/tiao-app.appspot.com/o/4283523.png?alt=media&token=eee555f1-d32e-4261-98b4-a694ae684da6" alt="cadastrar-album"/>
        <p className="text-card">Cadastrar albums</p>
        </div>
        </a>
        <a className="link-card" href="/">
        <div className="cards">
        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/tiao-app.appspot.com/o/2402461.png?alt=media&token=e4b14975-cefc-427b-8091-13bec10e235a" alt="cadastrar-tarck"/>
        <p className="text-card">Cadastrar Track</p>
        </div>
        </a>
        
      </div>
    );
  }
  
  export default Home;
  