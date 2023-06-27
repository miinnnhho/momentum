import "./App.scss";
import Search from "./components/search/search";
import Weather from "./components/weather/weather";
import Nowtime from "./components/Time/Time";
// import Greeting from "./components/greeting/greeting";
import TodoList from "./components/todo/todo";



function App() {
  return (
    <div className="main">
      <Search />
      <Weather />
      <Nowtime />
      {/* <Greeting /> */}
      <TodoList />
    </div>
  );
}

export default App;

// css -> scss사용
// search 를 넣었음.
