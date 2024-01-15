import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  // console.log(inputValue);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // console.log('useefect');
    fetchData(url);
  },[]);

  return (
    <>
    <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;