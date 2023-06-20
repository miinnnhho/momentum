import { useEffect, useState } from "react";
import "./Time.scss";

function Nowtime() {
  let [realTime, setRealTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes());

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
