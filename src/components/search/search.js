import "./search.scss";

function search() {
  return (
    <div className="App">
      {/* 왼쪽 상단에 navbar 검색창 만들기 */}
      <div className="nav">
        <span>Search</span>
        <form action="https://www.google.com/search" method="GET">
          <input name="q" type="text" className="nav-input"></input>
        </form>
      </div>
    </div>
  );
}

export default search;



// css -> scss사용
// search 를 넣었음.