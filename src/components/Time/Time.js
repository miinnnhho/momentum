import "./Time.scss";

function Time() {
  // function getClock() {
  //   const clock = document.querySelector("h2.clock");
  //   const date = new Date();
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   // const seconds = String(date.getSeconds()).padStart(2, "0");
  //   clock.innerText = `${hours}:${minutes}`; //시간 표현
  // }
  // getClock();
  // setInterval(getClock, 1000);

  return <h2 className="clock">00:00</h2>;
}

export default Time;
