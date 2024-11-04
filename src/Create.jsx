import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addusers } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");

  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const usedispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    const c = users[users.length - 1]?.id;

    if (c === undefined) {
      console.log("undefined");
      usedispatch(addusers({ id: 1, name, mobile, age }));
      alert("Data added successfully ...");
      navigate("/");
    } else {
      console.log("not undefined");
      usedispatch(
        addusers({ id: users[users.length - 1].id + 1, name, mobile, age })
      );
      alert("Data added successfully ...");
      navigate("/");
    }
  };

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50  border bg-secondary text-white p-5">
          <h2>Add New User</h2>
          <form onSubmit={formHandler}>
            <div>
              <label for="text" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label for="tel" class="form-label">
                Mobile
              </label>
              <input
                type="number"
                name="mobile"
                class="form-control"
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div>
              <label for="text" class="form-label">
                Age
              </label>
              <input
                type="number"
                name="age"
                class="form-control"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
