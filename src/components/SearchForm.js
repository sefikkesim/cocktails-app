import React,{useRef} from "react";
import { useAppContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, searchTerm } = useAppContext();
  const searchValue = useRef("");

  const searchCocktails = () => {
     setSearchTerm(searchValue.current.value);
  };
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  console.log(searchTerm);
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e)=> e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name"> Search Your Favorite Coctail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
