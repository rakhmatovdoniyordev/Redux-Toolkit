import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeUser } from "../../context/usersSlice";
import Edit from "../Edit/Edit";

function Users({ data }) {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={() => dispatch(removeUser(user))}>Remove</button>
            <button
              style={{ background: "green" }}
              onClick={() => setShowEditModal(true)}
            >
              Edit
            </button>
          </div>
          {showEditModal && (
            <Edit
              show={setShowEditModal}
              user={user}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Users;
