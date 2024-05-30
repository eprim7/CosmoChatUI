import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HomePage = ({ chatHistory }) => {
  return (
    <>
      <Header />
      <div className="App">
        <section className="hero">
          <h2 style={{ textWrap: 'balance' }}>
            Welcome to the ChatGPT Clone, your own personal AI assistant. Ask as many questions as you want and I will answer it, 
            while also keeping up with the metrics. However, I do occasionally make errors so be sure to always be on the lookout. 
            Happy Chatting!!
          </h2>
          <Button style={{ margin: '10px', fontSize: '20px' }} component={Link} to="/app">
            Start Chatting now
          </Button>
        </section>

        <section className="features" id="features">
          <h2>Features</h2>
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
              <p>See how often you use Chat, and how long your chats are</p>
            </div>
            <div className="card">
              <h3>Save Old Chats</h3>
              <p>Freely navigate to previous chats as needed</p>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <h2>How It Works</h2>
          <ul>
            <li>Sign Up or Log In</li>
            <li>Type your question or topic</li>
            <li>Receive instant responses</li>
            <li>Continue the conversation seamlessly</li>
          </ul>
        </section>

        <section className="testimonials" id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"This is the best AI chatbot I've ever used!" - User A</p>
          </div>
          <div className="testimonial">
            <p>"Incredibly helpful and easy to use." - User B</p>
          </div>
        </section>

        
      </div>
      </>
    
  );
}

export default HomePage;