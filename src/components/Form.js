import React, { useState } from 'react'

const Form = () => {
  const [form, setForm] =useState({})


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  
};

  const handleSubmit = async (event) => {
    event.preventDefault()
     if(Object.keys(form).length ===4) {
        try {
          const response = await fetch('http://localhost:4050/', {
            method: "POST",
            headers: {
              "Content-type": "application/json",
          },
            body: JSON.stringify(form), //carico i dati in formato json
   });
        setForm({})
       return await response.json();
       
         } catch (err) {
            console.warn(err);
       }
     } else {
      alert('insert data')
  }
      
}


 


  return (
    <form className='form'  onSubmit={handleSubmit} >
        <label>
            ID:
            <input type='number' name='id' value={form.id || ''} onChange={handleChange} />
        </label>
        <label>
            Name:
            <input type='text' name='name' value={form.name || ''} onChange={handleChange} />
        </label>
        <label>
            Email:
            <input type='text' name='email' value={form.email || ''} onChange={handleChange} />
        </label>
        <label>
            City:
            <input type='text' name='city' value={form.city || ''} onChange={handleChange} />
        </label>
        <button type='submit' >Submit</button>
    </form>
  )
}

export default Form