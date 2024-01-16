import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const url = 'https://fakestoreapi.com/products';

function Product() {
    const [users, setUsers] = useState([]);
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
     <h1 style={{  textAlign: 'center' }}>Products </h1>
       <div id ="flex" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {users.map(item => (
            <Link key={item.id} to={`/products/${item.id}`}>
          <div  key={item.id}  style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', textAlign: 'center', width: '200px' }}>
            <h2>{item.name}</h2>
            <p>Category {item.category}</p><br />
            <p>Price {item.price}</p>
          </div>
          </Link>
        ))}
      </div>
      </>
    );
  }

export default Product