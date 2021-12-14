import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Solidity Developer",
          "Web3 Developer",
          "UI/UX Designer",
          "Front-end Developer",
          "Back-end Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 300,
      }}
    />
  );
}

export default Type;
