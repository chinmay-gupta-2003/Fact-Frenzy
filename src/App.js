import CategoryFilter from "./components/categoryFilter";
import FactForm from "./components/factForm";
import FactList from "./components/factList";
import Header from "./components/header";
import "./style.css";

function App() {
  return (
    <>
      <Header></Header>
      <FactForm></FactForm>
      <main className="main">
        <CategoryFilter></CategoryFilter>
        <FactList></FactList>
      </main>
    </>
  );
}

export default App;
