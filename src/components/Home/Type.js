import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SoloGen AI",
          // "Freelancer!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    
  );
}

export default Type;
