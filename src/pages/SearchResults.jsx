import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchResults() {
  const { searchTerm, results } = useContext(SearchContext);

  return (
    <div style={{ padding: "120px 10%" }}>
      <h1>Search Results</h1>

      <p>
        {results.length} results found for "{searchTerm}"
      </p>

      {results.map(item => (
        <div key={item.id} style={{ marginBottom: "25px" }}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
