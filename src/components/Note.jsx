/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1 className="noteh">{props.head}</h1>
      <p className="notep">{props.para}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Note;
