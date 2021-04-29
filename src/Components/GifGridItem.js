import React from "react";
import "../index.css";

const GifGridItem = ({ id, title, url }) => {
  console.log(id, title, url);
  return (
    <div className="card animate__bounceIn">
      <img src={url} alt={title} />
      {/*  <p>{title}</p> */}
    </div>
  );
};

export default GifGridItem;
