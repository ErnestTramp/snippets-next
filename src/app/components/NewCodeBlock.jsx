'use client'
import hljs from "highlight.js";
import React, { useEffect, useState } from "react";

export default function NewCodeBlock() {
    const [detectedLanguage, setDetectedLanguage] = useState(null);
    useEffect(() => {
        hljs.initHighlightingOnLoad();
      }, []);

      const handleCodeChange = (event) => {
        const code = event.target.value;
        const language = hljs.highlightAuto(code).language;
        setDetectedLanguage(language);
      };

      return (
        <>
        <p className="language">{detectedLanguage}</p>
        <textarea
        className="new-code"
            onChange={handleCodeChange}
            placeholder="Enter some code..."
          ></textarea>
        </>
      )
}