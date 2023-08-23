"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock({ language, code}) {
  return (
    <SyntaxHighlighter language={language} style={darcula} wrapLongLines={true}>
      {code}
    </SyntaxHighlighter>
  );
}