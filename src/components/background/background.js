import React from "react";
import "./background.module.scss";
// import ReactDOM from 'react-dom';

class Background extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./0.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    );
  }
}

export default Background;
