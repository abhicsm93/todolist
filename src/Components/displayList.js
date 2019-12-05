import React from "react";

const DisplayList = props => {
  return (
    <li style={{ listStyle: "none" }}>
      <input key={props.id} type="checkbox" value={props.item} />
      {props.item}
    </li>
  );
};

export default DisplayList;
