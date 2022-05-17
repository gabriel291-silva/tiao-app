import "./ButtonDeleteAlbum.css"
function ButtonDeleteAlbum(IdAlbum) {

  function DeleteAlbum(){
    console.log(IdAlbum.IdAlbum)
    fetch(`https://tiao.supliu.com.br/api/album/${IdAlbum.IdAlbum}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'sbiel291@gmail.com'
      }})
      .then((response) => response.json())
      .then((json) => console.log(json));
      alert("album excluido");
      window.location.href = "/albuns"
  }
    return (
      <div className="button-delete-album">
        <button className="button-delete-album" onClick={DeleteAlbum}>excluir</button>
      </div>
    );
  }
  
  export default ButtonDeleteAlbum;
  