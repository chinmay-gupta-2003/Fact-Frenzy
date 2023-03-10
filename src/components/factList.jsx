import Fact from "./fact";

const FactList = (props) => {
  const facts = props.factList;
  const numberOfFacts = facts.length;

  return (
    <section>
      <ul className="facts-list">
        {props.factList.map((fact) => (
          <Fact key={fact.id} fact={fact}></Fact>
        ))}
      </ul>
      <p>There are {numberOfFacts} facts in the database. Add your own!</p>
    </section>
  );
};

export default FactList;
