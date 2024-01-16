import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from './LoadingSpinner';

function UserInfo() {
  const [users, setUsers] = useState();
    const {userId} = useParams()
    // console.log(userId)
    useEffect(()=>{
      // console.log('useeffect');
      axios.get(`https://fakestoreapi.com/users/${userId}`).then((response) => {
          console.log(response.data);
          setUsers(response.data)

      });
    },[])
    // console.log("y",users.email);
    
  return (
    <>
    
    { users?
  <div className="userinfo">
    <div id=''><h1>UserInfo</h1></div>
    <b><label htmlFor="">Name:&nbsp;</label></b>
    {users.username }
    <br />
   <b> <label htmlFor="">Password:&nbsp;</label></b>
    {users.password}
    <br />
    <b><label htmlFor="">Email:&nbsp;</label></b>
    {users.email}
    </div>
    :<LoadingSpinner/>
    
     }
      </>
  )
  

}

export default UserInfo