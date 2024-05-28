import React from 'react';
import {  Button } from '@mui/material';
import { Link } from 'react-router-dom';
//Container, Paper, Typography, List, ListItem, ListItemText,

const HomePage = ({ chatHistory }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">ChatGPT Clone</div>
        <nav>
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/Signin">Sign in</Button>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to ChatGPT Clone</h1>
        <p>Your personal AI assistant</p>
        <Button component={Link} to="/app"> 
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
            <h3>Secure and Private</h3>
            <p>Your data is safe with us.</p>
          </div>
          <div className="card">
            <h3>Multilingual Support</h3>
            <p>Communicate in multiple languages.</p>
          </div>
        </div>
      </section>
      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        
          <li>Sign Up or Log In</li>
          <li>Type your question or topic</li>
          <li>Receive instant responses</li>
          <li>Continue the conversation seamlessly</li>
        
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
      <footer>
        <div className="footer-links">
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/About">About</Button>
          <Button component={Link} to="/Features">Features</Button>
          <Button component={Link} to="/contact">Contact</Button>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a> 
        </div>
        <div className="contact-info">
          <p>Contact me: evan.primasing7@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;