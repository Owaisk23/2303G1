import React from "react";

const Child2 = ({ games }) => {
  return (
    <>
      {games.map((item, index) => (
        <h1 key={index}>{index+1}: {item}</h1>
      ))}
    </>
  );
};

export default Child2;
