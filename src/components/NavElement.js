import React from "react";

const style = {
  border: '1px solid black',
  flex: 1,
  margin: '10px',
  textAlign: 'center',
  borderRadius: '10px',
  padding: '3px',
  backgroundColor: 'grey',
}

function NavElement(props) {
  return (
      <p style={style}>{props.title}</p>
  );
};

export default NavElement;