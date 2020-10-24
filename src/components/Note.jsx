import React from "react";

function Note(props){
  return (<div className="note">
    <h3>{props.titleContent}</h3>
    <p>{props.subtitle}</p>
  </div>
  );
}
export default Note;