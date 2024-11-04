import React, { useReducer, useState } from 'react'
import { useSelector } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { editUsers } from './UserReducer';
import { useNavigate } from "react-router-dom";


const Edit = () => {
   
    const {id} = useParams();
    const users = useSelector((state)=> state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name,mobile,age} = existingUser[0];
    const [uname, setName] = useState(name);
    const [umobile, setMobile] = useState(mobile);
    const [uage, setAge] = useState(age);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerUpdate = (e) => {

            e.preventDefault();
            dispatch(editUsers({
                id: id,
                name: uname,
                phone: umobile,
                age: uage
            }))
     alert('Data Updated successfully ...')
    
    navigate('/');
    }

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50  border bg-secondary text-white p-5">
          <h2>Edit User</h2>
          <form onSubmit={handlerUpdate} >
            <div>
              <label for="text" class="form-label">
                Name
              </label>
              <input type="text" name="name" class="form-control" value={uname} onChange={e=>setName(e.target.value)}/>
            </div>

            
            <div>
              <label for="tel" class="form-label">
                Mobile
              </label>
              <input type="tel" name="phone" class="form-control" value={umobile} onChange={e=>setMobile(e.target.value)}/>
            </div>

            <div>
              <label for="text" class="form-label">
                Age
              </label>
              <input type="text" name="age" class="form-control" value={uage} onChange={e=>setAge(e.target.value)}/>
            </div>

            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Edit