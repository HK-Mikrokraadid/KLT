import React from "react";

/* const myStyle = {
  border:'1px solid blue',
  backgroundColor: 'lightgreen',
  margin: '5px',
  padding: '5px'
}; */

function Blogpost (props) {
  return (
    <div className="border border-danger m-2">
        <h2 className="m-2 p-2 ">{props.title}</h2>
        <p className="m-2 p-2">{props.body}</p>
    </div>
  );
};

export default Blogpost;