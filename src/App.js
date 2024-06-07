import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from './components/Header';
import Nav from './components/Nav';

// components

function App() {
  return <div>
    <Header>
      <Nav/>
    </Header>
    <main>
      Hello
    </main>
    <Footer/>
  </div>
}

export default App;