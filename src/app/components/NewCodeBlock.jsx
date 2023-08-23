"use client";
import SaveSnippet from "./SaveCodeBlock";
import hljs from "highlight.js";
import React, { useEffect, useState } from "react";

export default function NewCodeBlock() {
  var [detectedLanguage, setDetectedLanguage] = useState(null);
  var [codeValue, setCodeValue] = useState(""); // State to manage code value

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCodeChange = (event) => {
    var code = event.target.value;
    var language = hljs.highlightAuto(code).language;
    setDetectedLanguage(language);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    saveSnippet(detectedLanguage, codeValue);
  };

  const placeholders = "language";

  return (
    <>
      <p className="language">
        {detectedLanguage === undefined ? placeholders : detectedLanguage}
      </p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          className="new-code"
          onChange={handleCodeChange}
          placeholder="Enter some code..."
        ></textarea>
        <button className="form-button" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
