import react from "react";
import "./cadastroAlbum.css"
function CadastroAlbum() {
  const [titleAlbum,setTitleAlbum] = react.useState('')
  const [anoAlbum,setAnoAlbum] = react.useState('')

  function cadastrar_album(){
    fetch('https://tiao.supliu.com.br/api/album', {
      method: 'post', 
      body: JSON.stringify({
      name: titleAlbum,
      year:parseInt(anoAlbum)
    }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'sbiel291@gmail.com'
      }})
      .then((response) => response.json())
      .then((json) => console.log(json));
  
  }


    return (
      <div className="cadastro-album">
          <div className="title">
            <p>cadastrar track</p>
          </div>
          <p className="label" >name</p>
            <input className="input"   onChange={(e)=> setTitleAlbum(e.target.value)} />
          <p className="label">ano</p>
            <input className="input"  onChange={(e)=> setAnoAlbum(e.target.value)} />

        <button className="button" onClick={cadastrar_album}>cadastrar album</button>
      </div>
    );
  }
  
  export default CadastroAlbum;