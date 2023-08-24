import SaveCodeBlock from "../SaveCodeBlock/SaveCodeBlock";
"use client";
import hljs from "highlight.js";
import React, { useEffect, useState } from "react";

export default function NewCodeBlock() {
  var [detectedLanguage, setDetectedLanguage] = useState(null);
  var [codeValue, setCodeValue] = useState("");

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCodeChange = (event) => {
    var code = event.target.value;
    var language = hljs.highlightAuto(code).language;
    setDetectedLanguage(language);
    setCodeValue(code);
  };

  const handleAddSnippet = () => {
    if (!codeValue || !detectedLanguage) {
      // Ensure both code and detectedLanguage are set before sending the request.
      return;
    }
  
    fetch('/SaveCodeBlock', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: codeValue, language: detectedLanguage }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Snippet added:', data);
        
        setCodeValue('');
        setDetectedLanguage(null);
      })
      .catch((error) => {
        console.error('Error adding snippet:', error);
      });
  };

  const placeholders = "language";

  return (
    <>
      <p className="language">
        {detectedLanguage === undefined ? placeholders : detectedLanguage}
      </p>
        <textarea
          className="new-code"
          onChange={handleCodeChange}
          placeholder="Enter some code..."
        ></textarea>
        <button className="form-button" onClick={handleAddSnippet}>
          Send
        </button>
    </>
  );
}
