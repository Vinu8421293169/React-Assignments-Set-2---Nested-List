import React from "react";
export default function Town({ towns }) {
  return (
    <>
      {towns.map((ele, index) => {
        return <div>{ele.name}</div>;
      })}
    </>
  );
}
