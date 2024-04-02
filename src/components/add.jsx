/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Note from "./Note";
function Add() {
  const [dis, diss] = useState([]);
  const [note, notes] = useState({
    title: "",
    note: "",
  });
  const [title, titles] = useState([]);
  const [npm, npms] = useState([]);
  function handle() {
    // console.log(note)
    diss((prev) => {
      return [...prev, note];
    });
    notes({
      title: "",
      note: "",
    });
    console.log(dis);
  }
  function handles(e) {
    const { name, value } = e.target;
    notes((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function deleteNote(id) {
    diss((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <div className="container">
        <div className="box">
          <input
            value={note.title}
            name="title"
            onChange={handles}
            className="i1"
            type="text"
            placeholder="Title"
          ></input>
          <input
            value={note.note}
            onChange={handles}
            name="note"
            className="i2"
            type="text"
            placeholder="Take a note.."
          ></input>
          <button onClick={handle} className="b1">
            Add
          </button>
        </div>
      </div>
      {dis.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            head={item.title}
            onDelete={deleteNote}
            para={item.note}
          />
        );
      })}
    </div>
  );
}
export default Add;