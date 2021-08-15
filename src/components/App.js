import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setToys(data)
    })
  }, [])

  function update(){
const newToys = toys.filter()
    setToys(newToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleLike(id, likes){
    // console.log(id, likes)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {    "Content-type": "application/json"  },
      body: JSON.stringify({ 'likes': likes + 1 })
    }).then(res => res.json())
    .then(data => {
      const newL = toys.map(toy => {
        if(toy.id === id){
          toy.likes = likes + 1
          return toy
        } else {return toy}})
        setToys(newL)
      })

 

    
  }

  function handleDel(id){
fetch(`http://localhost:3001/toys/${id}`, {
method : 'DELETE',
})
.then(res => {
  const newL = toys.filter(toy => toy.id !== id
  )
  setToys(newL)
})



}



  

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDel = {handleDel} handleLike ={handleLike} />
    </>
  );
}

export default App;
