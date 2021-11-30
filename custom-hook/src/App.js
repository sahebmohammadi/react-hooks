import "./App.css";
import useFetch from "./hook/useFetch";

function App() {
  const { error, loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="App">
      {loading && <p>loadig...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          {data.map((user) => (
            <li>{user.name}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
