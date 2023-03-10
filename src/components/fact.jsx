import supabase from "../supabase";
import { useState } from "react";
import CATEGORIES from "../utils";

const Fact = (props) => {
  const { fact, setFactList, factList } = props;
  const [isUpdating, setIsUpdating] = useState(false);
  const isdisputed =
    fact.votesFalse > fact.votesInteresting + fact.votesMindblowing;

  const handleAction = async (action) => {
    if (!props.user) return alert("Please login to vote");
    setIsUpdating(true);

    const { data, error } = await supabase
      .from("facts")
      .update({ [action]: fact[action] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    if (error) return alert("An error occured");

    setFactList(
      factList.map((fact) => (fact.id === data[0].id ? data[0] : fact))
    );
  };

  return (
    <li className="fact">
      <p>
        {isdisputed && <span className="disputed-fact">[⛔ DISPUTED] </span>}
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
        <button
          disabled={isUpdating}
          onClick={() => handleAction("votesInteresting")}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          disabled={isUpdating}
          onClick={() => handleAction("votesMindblowing")}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button
          disabled={isUpdating}
          onClick={() => handleAction("votesFalse")}
        >
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
