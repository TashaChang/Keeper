import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [note, setNote] = useState([]);

  function add(text) {
    setNote((prevalue) => {
      return [...prevalue, text];
    });
  }

  function cut(id) {
    setNote((prevalue) => {
      return prevalue.filter((f, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={add} />
      {note.map((t, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={t.title}
            content={t.content}
            deleteNote={cut}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
