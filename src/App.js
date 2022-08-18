import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com/comments/"
  const [data, setData] = useState(null)
  useEffect(()=> {
    axios
      .get(baseUrl)
      .then(resp=>{
        setData(resp.data)
      })
  },[])

  if(data===null) {
    return null 
  } else {

  return (
    <div className="App">
      <header className="App-header">
        <h1>This data fetched from API using Axios</h1>
        <p>Total found {data.length} comments</p>
        {data!==null && data!==undefined &&
          data.map(e=>(
            <div className="card">
              <h2>{e.name}</h2>
              <h4>{e.email}</h4>
              <p>{e.body}</p>
          </div>
          ))
        }
      </header>
    </div>
  );
}
}
export default App;
