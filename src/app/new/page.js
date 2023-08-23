import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "../components/Header";

export default async function Page() {
  const codeString = "(num) => num + 1";
  return (
    <>
      <Header />
      <SyntaxHighlighter language="javascript" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}
