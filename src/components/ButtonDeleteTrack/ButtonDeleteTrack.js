import "./ButtonDeleteTrack.css"
function ButtonDeleteTrack(IdTrack) {

  function DeleteTrack(){
    console.log(IdTrack)
    fetch(`https://tiao.supliu.com.br/api/track/${IdTrack.IdTrack}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'sbiel291@gmail.com'
      }})
      .then((response) => response.json())
      .then((json) => console.log(json));
      alert("track excluida!!");
      window.location.href = "/albuns"
  }
    return (
        <button className="button-delete-track" onClick={DeleteTrack}>X</button>
    );
  }
  
  export default ButtonDeleteTrack;
  