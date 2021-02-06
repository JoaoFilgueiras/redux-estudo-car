
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addCar } from '../../redux/reducers/home';
import { hidenMessage, showMessage } from '../../redux/reducers/layout';

import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

export default function Adicionar() {
  
  const [form, setForm] = useState({name: '', url: ''});
  const dispatch = useDispatch();

  const submitForm = (e) => {
    setForm({...form, [e.target.name] : e.target.value});
  }

  function onSubmit(e) {
    e.preventDefault();

    dispatch(addCar(form));
    setForm({name : '', url: ''});
    dispatch(showMessage({message_type: 'success', message_desc: 'Salvo com sucesso!!!'}));
    setTimeout(() => {dispatch(hidenMessage())}, 2500);
  }


  return (
    <>
      <Header/>
      <form className="container mt-5" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input 
            onChange={submitForm} 
            type="text" 
            name="name" 
            className="form-control" 
            placeholder="Nome..." 
            value={form.name}/>
        </div>
        <div className="form-group">
          <label>URL:</label>
          <input 
            onChange={submitForm} 
            type="text" 
            name="url" 
            className="form-control" 
            placeholder="URL:https://cars"
            value={form.url} />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
      <Footer/>
    </>
  )
}