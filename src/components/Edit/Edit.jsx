import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../context/usersSlice";

const Edit = ({ show, user }) => {
  const [formData, setFormData] = useState(user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(formData));
    show(false);
  };

  return (
    <div>
      <div
        className="fixed w-full h-screen bg-[#0000005d] top-0 left-0"
        onClick={() => show(false)}
      ></div>
      <div className="w-[500px] h-auto bg-white rounded-[10px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40">
        <div
          className="create__user"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Update User Info</h2>
          <form className="create__user-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="profession"
              name="profession"
              required
              value={formData.profession}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="age"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
            />
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button type="submit" style={{ background: "green" }}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
