import React from "react";
// import Nav from './components/Nav';
import Mainlayout from './Layout/Mainlayout';
import { FAQs, Launch, Onlinebusiness, Pricing, Simplified, Smallbusiness, Websites, Collaborate } from "./sections";

const App = () => (
  <Mainlayout>

    <section className="padding b">
      <Smallbusiness />
    </section>
    <section className="padding bg-primary">
      <Onlinebusiness />
    </section>
    
    <section className="padding">
      <Websites />
    </section>
    
    <section className="padding">
      <Simplified />
    </section>
    
    <section className="padding bg-primary">
      <Launch />
    </section>
    
    <section className="padding">
      <Pricing />
    </section>
    
    <section className="padding">
      <FAQs />
    </section>
    
    <section className="padding">
      <Collaborate />
    </section>

    </Mainlayout>
    );
    
    export default App;