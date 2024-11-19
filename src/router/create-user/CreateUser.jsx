import React from "react";
import "./CreateUser.css";
import { useInputValue } from "../../hooks/useInputValue";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/usersSlice";

export const initialState = {
  id: null,
  name: "",
  profession: "",
  age: "",
  gender: ""
};

function CreateUser() {
  const { data, handleChange, setData } = useInputValue(initialState);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...data, id: new Date().getTime() };
    console.log(newUser);
    setData(initialState);
    dispatch(addToUsers(newUser))
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form className="create__user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="profession"
          name="profession"
          value={data.profession}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={data.age}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={data.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
