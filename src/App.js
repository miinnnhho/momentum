import "./App.scss";
import Search from "./components/search/search";
import Weather from "./components/weather/weather";
import Nowtime from "./components/Time/Time";

function App() {
  return (
    <body>
      <div>
        <Search />
        <Weather />
        <Nowtime />
      </div>
    </body>
  );
}

export default App;

// css -> scss사용
// search 를 넣었음.
