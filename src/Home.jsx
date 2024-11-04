import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUsers } from './UserReducer';

const Home = () => {

    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    
    const handlingDel = (id) => {

          dispatch(deleteUsers({id:id}))

    }

  return (
    <div className='container'>
        <h2>Create Users</h2>
       <Link to='/create'><button className='btn btn-primary mt-2 mb-2'>Create +</button></Link>
       <table className='table'>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>MOBILE</th>
                  <th>AGE</th>
                  <th>ACTION</th>
              </tr>
          </thead>
          <tbody>
            {users?.map((user,index)=>(

                  <tr key={index}>
                    <td> {user.id} </td>
                    <td> {user.name} </td>
                    <td> {user.mobile} </td>
                    <td> {user.age} </td>
                    <td><Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                    <button onClick={()=> handlingDel(user.id)} className='btn btn-sm btn-primary ms-2'>Delete</button></td>
                    
                  </tr>

            )) }
          </tbody>

       </table>
    </div>
  )
}

export default Home
