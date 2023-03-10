import React, { useState } from "react";
import isUrl from "is-url";

import CATEGORIES from "../utils";

const FactForm = (props) => {
  const [fact, setFact] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const onSubmitHandler = (e) => {
    // prevent default form submission
    e.preventDefault();

    // validate form data
    if (fact && isUrl(source) && category && fact.length <= 200) {
      // create form data
      const formData = {
        id: Date.now(),
        text: fact,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear,
        userEmail: props.userEmail,
      };

      // update state
      props.setFactList([formData, ...props.factList]);

      console.log(formData);
      console.log("valid form data");

      // clear form data
      setFact("");
      setSource("");
      setCategory("");

      // close form
      props.toggleForm();
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="fact-form">
      <input
        required
        value={fact}
        onChange={(e) => setFact(e.target.value)}
        type="text"
        placeholder="Share a fact with the world..."
      />
      <span>{200 - fact.length}</span>
      <input
        required
        value={source}
        onChange={(e) => setSource(e.target.value)}
        type="text"
        placeholder="Trustworthy source..."
      />
      <select
        required
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
};

export default FactForm;
