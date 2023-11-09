import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Mainlayout({ children }) {
  return (
    <main className="relative">
      <Nav></Nav>

      <div>{children}</div>

      <Footer></Footer>
    </main>
  )
}

export default Mainlayout