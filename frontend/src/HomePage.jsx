import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Features</h1>
          <div className="feature-cards">
            <div className="card">
              <h3>Real-time Responses</h3>
              <p>Get instant answers to your questions.</p>
            </div>
            <div className="card">
              <h3>Customizable Interface</h3>
              <p>Tailor the chat experience to your needs.</p>
            </div>
            <div className="card">
              <h3>Metrics</h3>
              <p>See metrics on your performance</p>
            </div>
            <div className="card">
              <h3>Save Old Chats</h3>
              <p>Freely navigate to previous chats as needed</p>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>How it Works</h1>
          <div className="feature-cards">
            <div className="card">
              <h2>Locate to Chat now</h2>
            </div>
            <div className="card">
              <h2>Type your question or topic</h2>
            </div>
            <div className="card">
              <h2>Receive Instant responses</h2>
            </div>
            <div className="card">
              <h2>Continue the conversation seamlessly</h2>
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <h1 style={{ fontSize: '50px', fontWeight: 'bold', textDecoration: 'underline'}}>Testimonials</h1>
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
}

export default HomePage;