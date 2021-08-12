import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDel, handleLike}) {

  const renderToys = toys.map(toy => <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} handleDel={handleDel} handleLike = {handleLike}/>)

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
