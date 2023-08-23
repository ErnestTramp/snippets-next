import Header from "../components/Header";
import NewCodeBlock from "../components/NewCodeBlock";

export default function Page() {
  return (
    <>
      <Header page="Home" nav="/" />
      <main>
        <form>
          <NewCodeBlock />
          <button className="form-button">Send</button>
        </form>
      </main>
    </>
  );
}
