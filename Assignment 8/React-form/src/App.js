import './App.css';
import Form from "./components/form/Form.jsx"

const App = () => {
  return (
    <>
      <header className="header">

      </header>

      <section className="wrapper">
        <div className="topic__wrapper">
            <h1>Survey to Calulate Population</h1>
        </div>

        <hr />

        <Form />
      </section>
    </>
  );
}

export default App;
