import React,{useState} from 'react' ;
import axios from 'axios' ;
import './App.css'
//"https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general"

function App() {
  let[loader,setLoader] = useState(true)
let getJoke = () => {
  setLoader(true)
  setJoke("")
  axios.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general').then((response) =>{
    console.log(response)
    setJoke(response.data[0])
    setLoader(false)
  })
}
let[joke, setJoke] = useState()

  return ( <>
<div className='container'>


    {
      joke&&
     
        <>
      
        <h1>{joke.setup}</h1><br/>
        <h3>{joke.punchline}</h3>
        
        </> }
        {
  loader && <><div className='loader'>
    <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    </div></>
}
  <br></br>
    <button type="button" class="btn btn-dark"  onClick={getJoke}>Get another joke!</button>
    
    
</div>
  </> );
}
 
export default App;



