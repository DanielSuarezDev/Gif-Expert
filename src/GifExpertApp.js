import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  /* const categories = ["One Punch", "Samurai X", "Dragon Ball"]; */
  const [categories, setCategories] = useState(["Dragon Ball"]);

  /*  const handleAdd = () => {
    setCategories([...categories, "Frozen"]);
  }; */

  return (
    <>
      <h2>Busca Tu Gif</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
