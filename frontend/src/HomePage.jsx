import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FaEdit, FaLocationArrow } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";




const HomePage = ({ chatHistory }) => {
  return (
    <>
      <Header />
      <div className="hero-background">
        <section className="hero">
          <h2 style={{ textWrap: 'balance', color:'black'}}>
            Welcome to the ChatGPT Clone, your own personal AI assistant. Ask as many questions as you want and I will answer it, 
            while also keeping up with the metrics. However, I do occasionally make errors so be sure to always be on the lookout. 
            Happy Chatting!!
          </h2>
          <Button style={{ margin: '10px', fontSize: '20px' }} component={Link} to="/app">
            Start Chatting now
          </Button>
        </section>
      </div>
      <div className="App">
        <section className="features" id="features">
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Features <FaCheck /> </h1>
          <div className="feature-cards">
            <div className="card">
            <FaComments className="icon" />
              <h2>Get instant answers to your questions.</h2>
            </div>
            <div className="card">
              <FaLaptop className='icon'/>
              <h2>Tailor the chat experience to your needs.</h2>
            </div>
            <div className="card">
              <FaChartLine className='icon'/>
              <h2>See metrics on your performance</h2>
            </div>
            <div className="card">
              <FaRegEdit  className='icon'/>
              <h2>Pick up right where you left off in previous chats</h2>
            </div>
          </div>
        </section>

  <section className="how-it-works" id="how-it-works">
    <h1>How it Works <FaLaptop /></h1>
    <div className="feature-cards">
      <div className="card">
        <FaLocationArrow className="icon" />
        <h2>Locate to Chat now</h2>
      </div>
      <div className="card">
        <FaKeyboard className="icon" />
        <h2>Type your question or topic</h2>
      </div>
      <div className="card">
        <FaComments className="icon" />
        <h2>Receive Instant responses</h2>
      </div>
      <div className="card">
        <FaHandshake className="icon" />
        <h2>Continue the conversation seamlessly</h2>
      </div>
    </div>
  </section>

        <section className="testimonials" id="testimonials">
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Testimonials <FaComments /></h1>
          <div className="feature-cards">
            <div className="card">
              <h3>Will Primasing</h3>
              <p>"It is just like the real thing"</p>
            </div>
            <div className="card">
              <h3>Kyle Primasing</h3>
              <p>"Extremely helpful and easy to use"</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;