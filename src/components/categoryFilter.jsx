import CATEGORIES from "../utils";

const CategoryFilter = (props) => {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            onClick={() => props.setCurrentCategory("all")}
            className="btn btn-all-categories"
          >
            All
          </button>
        </li>
        {CATEGORIES.map((category) => (
          <li key={category.color} className="category">
            <button
              onClick={() => props.setCurrentCategory(category.name)}
              className="btn btn-category"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryFilter;
