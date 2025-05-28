import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        placeholder="Search..."
        id="search"
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default SearchBox;
