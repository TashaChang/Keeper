import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  let [extend, setExtend] = useState(false);

  let [text, setText] = useState({
    title: "",
    content: "",
  });

  function saved(event) {
    let { name, value } = event.target;
    setText((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  }

  function box() {
    setExtend((prevalue) => {
      return !prevalue;
    });
  }

  return (
    <div>
      <form className="create-note">
        {extend ? (
          <input
            value={text.title}
            onChange={saved}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          onClick={box}
          value={text.content}
          onChange={saved}
          name="content"
          placeholder="Take a note..."
          rows={extend ? 3 : 1}
        />
        <Zoom in={extend}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.addNote(text);
              setText({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
