import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        <RemoveIcon />
      </button>
    </div>
  );
}

export default Note;
