import React from "react";

const Dropdown = (props) => {
 
  return (
    <div>
      <select onChange={props.handleDropdown} >
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Four">Four</option>
      </select>
    </div>
  );
};
export default Dropdown;
