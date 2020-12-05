import React, { useState } from "react";
import Town from "./town";
export default function City({ cities }) {
  const [townIndex, setTownIndex] = useState(-1);

  const handleTown = (index) => {
    setTownIndex(index);
  };

  return (
    <>
      {cities.map((ele, index) => {
        return (
          <>
            <div id={`city${index + 1}`} onClick={() => handleTown(index)}>
              {ele.name}
            </div>
          </>
        );
      })}
      {townIndex !== -1 && <Town towns={cities[townIndex].towns}></Town>}
    </>
  );
}
