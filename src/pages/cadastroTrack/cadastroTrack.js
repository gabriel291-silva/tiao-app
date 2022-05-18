import react from "react"
import "./cadastroTrack.css"

  function CadastroTrack() {
    const [trackTitle,setTrackTitle] = react.useState('')
    const [trackNumber,setTrackNumber] = react.useState('')
    const [trackDuration,setTrackDuration] = react.useState('')
    const [trackAlbumId,setTrackAlbumId] = react.useState('')
      function cadastrar_track(){
        fetch('https://tiao.supliu.com.br/api/track', {
          method: 'post', 
          body: JSON.stringify({
            album_id:parseInt(trackAlbumId),
            number:parseInt(trackNumber),
            title:trackTitle,
            duration:trackDuration
      
        }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'sbiel291@gmail.com'
          }})
          .then((response) => response.json())
          .then((json) => console.log(json));
          alert("track cadastrada!!");
          window.location.href = "/albuns"
      }
      return (
          <div className="cadastro-track">
            <div className="title">
              <h1>cadastrar track</h1>
            </div>
            <p className="label">album id</p>
            <input type="text" className="input" onChange={(e)=>setTrackAlbumId(e.target.value)} ></input>
            <p className="label">title</p>
            <input type="text" className="input" onChange={(e)=> setTrackTitle(e.target.value)}  ></input>
            <p className="label">number</p>
            <input type="text" className="input" onChange={(e)=> setTrackNumber(e.target.value)}  ></input>
            <p className="label">duration</p>
            <input type="text" className="input" onChange={(e)=> setTrackDuration(e.target.value)}  ></input>
            <button className="button" onClick={cadastrar_track}> cadastrar</button>



          </div>
        );
  }
  
  export default CadastroTrack;