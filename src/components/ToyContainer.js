import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {

  const renderToys = toys.map(toy => <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} />)

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
