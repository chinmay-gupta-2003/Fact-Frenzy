import React, { useState } from "react";
import isUrl from "is-url";
import CATEGORIES from "../utils";
import supabase from "../supabase";

const FactForm = (props) => {
  const [fact, setFact] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const onSubmitHandler = async (e) => {
    // prevent default form submission
    e.preventDefault();

    if (!props.user) return alert("Please login to share a fact");

    // validate form data
    if (fact && isUrl(source) && category && fact.length <= 200) {
      // save form data to supabase
      setIsUpdating(true);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([
          {
            text: fact,
            source,
            category,
            userEmail: props.userEmail,
          },
        ])
        .select("*");

      setIsUpdating(false);

      // update state
      if (error) return alert("An error occured");
      props.setFactList([newFact[0], ...props.factList]);

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
        disabled={isUpdating}
        required
        value={fact}
        onChange={(e) => setFact(e.target.value)}
        type="text"
        placeholder="Share a fact with the world..."
      />
      <span>{200 - fact.length}</span>
      <input
        disabled={isUpdating}
        required
        value={source}
        onChange={(e) => setSource(e.target.value)}
        type="text"
        placeholder="Trustworthy source..."
      />
      <select
        disabled={isUpdating}
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
      <button disabled={isUpdating} className="btn btn-large">
        Post
      </button>
      <p>*Your ID will be recorded !</p>
    </form>
  );
};

export default FactForm;
