
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

export default function Cart() {

  return (
    <>
      <Header/>
        <p className="mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
      <Footer/>
    </>
  )
}