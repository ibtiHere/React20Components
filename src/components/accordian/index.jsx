// single Selection
// multiple Selection

import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [Selected, setSelected] = useState(null);
  const [enablemultiselection, setmultipleselection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  const singleSelector = (getcurrentid) => {
    setSelected(getcurrentid === Selected ? null : getcurrentid);
  };
  const MultipleSelector = (getcurrentid) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getcurrentid);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getcurrentid);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setmultiple(cpyMultiple);
  };
  console.log(Selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setmultipleselection(!enablemultiselection)}>
        ENABLE MULTIPLE ACCORDIAN SELECTION
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enablemultiselection
                    ? () => MultipleSelector(dataItem.id)
                    : () => singleSelector(dataItem.id)
                }
                className="title"
              >
                <h3 className="heading">{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enablemultiselection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : Selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
