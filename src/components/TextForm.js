import React, { useState } from "react";

export default function TextForm(props) {
  // Function to convert text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  // Function to convert text to lowercase
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  // Function to handle text input changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Function to copy text to clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  // Function to remove extra spaces
  const handleRemoveClick = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  // Function to clear text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            rows="7"
          ></textarea>
        </div>

        {/* Convert to UpperCase Button */}
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        {/* Convert to LowerCase Button */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>
          Convert to LowerCase
        </button>

        {/* Copy Text Button */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>

        {/* Remove Spaces Button */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveClick}>
          Remove Spaces
        </button>

        {/* Clear Text Button */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>

        <p>
          {0.008 * text.split(" ").filter((word) => word !== "").length} minutes
          read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
  
      </div>
    </>
  );
}
