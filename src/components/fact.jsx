import CATEGORIES from "../utils";

const Fact = (props) => {
  const { fact } = props;

  return (
    <li className="fact">
      <p>
        {fact.text} &nbsp;
        <a
          className="source"
          target="_blank"
          rel="noreferrer"
          href={fact.source}
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(
            (category) => category.name === fact.category
          ).color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
};

export default Fact;
