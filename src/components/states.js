import React, { useState } from "react";
import City from "./city";
function State({ states }) {
  const [cityIndex, setCityIndex] = useState(-1);

  const handleCity = (index) => {
    setCityIndex(index);
  };

  return (
    <>
      {states.map((ele, index) => {
        return (
          <>
            <div id={`state${index + 1}`} onClick={() => handleCity(index)}>
              {ele.name}
            </div>
          </>
        );
      })}
      <div>Cities:</div>
      {cityIndex !== -1 && <City cities={states[cityIndex].cities}></City>}
    </>
  );
}

export default State;
