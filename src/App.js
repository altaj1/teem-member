import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User'

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
 useEffect( ()=>{
    fetch('https://randomuser.me/api/?results=30')
    .then(res => res.json())
    .then(data =>setUsers(data.results))
    },[])
    const addMember = (name)=>{
             setTeam([...team, name])
    }
  return (
    <div className="App">
      <ul>
        {
          team.map((m, idx) =>  <li key = {idx}>{m}</li>)
        }
      </ul>
      {
        users.map(user=> <User user={user} addMember={addMember} ></User>)
      }
    </div>
  );
}

export default App;
