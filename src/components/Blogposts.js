import React from "react";
import blogpostsCopy from './blogposts copy';
import Blogpost from "./Blogpost";


function Blogposts () {
  return (
    <>
      {
        blogpostsCopy.map((blogpost, index) => {
          return <Blogpost title={blogpost.title} body={blogpost.body} key={index}/>
        })
      }
    </>
  );
}

export default Blogposts;