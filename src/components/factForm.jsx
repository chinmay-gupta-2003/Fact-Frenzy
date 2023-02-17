import CATEGORIES from "../utils";

const FactForm = (props) => (
  <form className="fact-form">
    <input type="text" placeholder="Share a fact with the world..." />
    <span>200</span>
    <input type="text" placeholder="Trustworthy source..." />
    <select>
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

export default FactForm;
