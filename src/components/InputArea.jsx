import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleKeyDown(event){
    if (event.key === 'Enter'){
      if (inputText === "") {
        document.getElementById("todoText").focus();
      } else {
        props.onAdd(inputText);
        setInputText("");
      }
    }
    // console.log(event)
    // console.log(event.key)
  }

  return (
    <div className="form">
      <input
        id="todoText"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={inputText}
      />
      <button className="add"
        onClick={() => {
          if (inputText === "") {
            document.getElementById("todoText").focus();
          } else {
            props.onAdd(inputText);
            setInputText("");
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

