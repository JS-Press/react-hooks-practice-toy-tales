import React, { useState } from "react";

function ToyForm({toys, setToys}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      name: name,
      headers: { 'Accepts': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, image, likes: 12 })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setToys([...toys, data])
    })
  }

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeImage(event) {
    setImage(event.target.value)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChangeName}
          value={name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChangeImage}
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

// const [formData, setFormData] = useState({
//   name: 'Woody',
//   image: 'some-image'
// })

// function handleChange(event) {
//   setFormData({...formData, [event.target.name]: event.target.value})
// }
