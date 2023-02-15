import { useState } from "react";
import CategoryFilter from "./components/categoryFilter";
import FactForm from "./components/factForm";
import FactList from "./components/factList";
import Header from "./components/header";
import "./style.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <Header formVisible={showForm} formHandler={toggleForm}></Header>
      {showForm && <FactForm></FactForm>}
      <main className="main">
        <CategoryFilter></CategoryFilter>
        <FactList></FactList>
      </main>
    </>
  );
}

export default App;
