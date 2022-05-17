import react from "react";
import ButtonDeleteAlbum from "../../components/ButtonDeleteAlbum/ButtonDeleteAlbum";
import ButtonDeleteTrack from "../../components/ButtonDeleteTrack/ButtonDeleteTrack";
import "./listaAlbums.css"
function ListaAlbums() {
  const [album,setAlbum] = react.useState([])
  const [searchKey,setSearchKey] = react.useState([])
   react.useEffect(()=>{
    fetch('https:tiao.supliu.com.br/api/album', {
             method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization':'sbiel291@gmail.com'
              }})
              .then(response => response.json())
                .then(data => setAlbum(data.data));
   },[])
console.log(album)
    function Search(){
      fetch(`https:tiao.supliu.com.br/api/album?keyword=${searchKey}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'sbiel291@gmail.com'
        }})
        .then(response => response.json())
          .then(data => setAlbum(data.data));
    }
    

    return (
      <div className="lista-albums">
        <div className="search">
          <input className="input-search" type="text"  onChange={(e)=> setSearchKey(e.target.value)}></input>
          <button className="button-search" onClick={Search}>pesquisar</button>
        </div>

<div className="lists">
  <h1> albums</h1>
{ album ?
         album.map((album)=>
          <div className="card-album-contents" key={album.id}>
            <div className="title-album-contents">
            <h1 className="name-album"> ID:{album.id} - {album.name}</h1>
            <ButtonDeleteAlbum onClick={Search} IdAlbum={album.id} ></ButtonDeleteAlbum>
            </div>
              {album.tracks.map((track)=>
                <div className="tracks-contents" key={track.number}>
                  <div className="track-number-contents">
                  <p>N</p>
                      <p className="track-number">{track.number}</p>
                  </div>
                  <div className="track-name-contents">
                    <p>Name</p>
                      <p className="track-name">{track.title}</p>
                  </div>
                
                  <div className="track-duration-contents">
                    <p>Duração</p>
                      <p className="track-duratiion">{track.duration}</p>
                  </div>
                  <div className="track-delete-contents">
                  <p>Deletar</p>
                    <ButtonDeleteTrack IdTrack={track.id}/>
                  </div>
                  
                </div> 
              )}
          </div>       

         )
       :<h1>loading</h1>}

</div>
     
     
     </div>
    );
  }
  
  export default ListaAlbums;