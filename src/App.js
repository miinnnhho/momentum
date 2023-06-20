import "./App.scss";
import Search from "./components/search/search";
import Weather from "./components/weather/weather";
import Time from "./components/Time/Time";

function App() {
  return (
    <div>
      <Search />
      <Weather />
      <Time />
    </div>
  );
}

export default App;

// css -> scss사용
// search 를 넣었음.
