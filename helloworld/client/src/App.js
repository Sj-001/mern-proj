import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import {useState} from 'react';

function App() {
  const[username, setusername]=useState("")
  const[response, setresponse]=useState([])

    function senddata(){
      var user={
        username:username
      }

      axios.post("/api/senddata", user)
      .then(res=>{
        console.log(res)
        setresponse(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
  return (
    <div className="App">
      <input type="text" value={username} onChange={(event)=>{setusername(event.target.value)}}/>
      <button onClick={senddata}>Send data to Node js</button>
  <h1>Backend Response {response}</h1>
    </div>
  );
}

export default App;
