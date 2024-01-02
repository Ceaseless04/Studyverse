import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [server_data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(response =>
        response.json()
      )
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(e => {
        console.error('Error fetching data:', e);
      });
  }, []);

return(
    <div>
      {(typeof server_data.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        server_data.users.map((user, i) => {
          return <p key={i}>{user}</p>
        })
      )}
    </div>
  )
}

export default App
