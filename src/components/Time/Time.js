import { useEffect, useState } from "react";
import "./Time.scss";

function Nowtime() {
  let [realTime, setRealTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      setRealTime(`${hours}:${minutes}`);
    }, 1000);
  });


  
  return (
    <>
      <div className="real-time">{realTime}</div>
    </>
  );
}

export default Nowtime;
