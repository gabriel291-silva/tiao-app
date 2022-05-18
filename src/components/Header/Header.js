

import "./Header.css"
function Header() {
    return (
      <div className="header">
        <a href="/">
          <div className="logo-contents"> 
            <img src="https://firebasestorage.googleapis.com/v0/b/tiao-app.appspot.com/o/logo.png?alt=media&token=cc912df2-e3b5-4309-afc1-8a38114beaef" alt="logo-tiao"/>
          </div>
        </a>
        <a className="header-pageination" href="/albuns"> albums</a>
        <a className="header-pageination" href="/albuns-cadastro">cadastrar album</a>
        <a className="header-pageination" href="/track-cadastro">cadastrar track</a>
      </div>
    );
  }
  
  export default Header;
  