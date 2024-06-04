import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
//import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Grid, Paper, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Metrics from './Metrics';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import Header from './Header';
import Footer from './Footer';
import { FaHistory } from "react-icons/fa";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const systemMessage = {
  role: "system",
  content: "Explain all concepts like I am 10 years old."
};

// Load API key from environment variable
// API KEY SHOULD GO HERE 
//const apiKey = "";

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      // Ensure timestamps are Date objects
      return parsedMessages.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    } else {
      return [
        {
          message: "Hello, I am ChatGPT!",
          sender: "ChatGPT",
          direction: "incoming",
          timestamp: new Date()
        }
      ];
    }
  });
  const [chatHistory, setChatHistory] = useState(() => {
    const storedChatHistory = localStorage.getItem('chatHistory');
    if (storedChatHistory) {
      const parsedHistory = JSON.parse(storedChatHistory);
      // Ensure timestamps are Date objects
      return parsedHistory.map(chat => chat.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })));
    } else {
      return [];
    }
  });
  const [averageLengths, setAverageLengths] = useState([]);
  const [numChats, setNumChats] = useState(0);
  const [dailyMessages, setDailyMessages] = useState({});
  const [chatOpen, setChatOpen] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('messages', JSON.stringify(messages));
    } catch (e) {
      console.error('Error saving messages to localStorage', e);
    }

    if (messages.length > 1) { // Only calculate if there's more than the initial message
      const userMessages = messages.filter(msg => msg.sender === "user");
      if (userMessages.length > 0) {
        const totalLength = userMessages.reduce((acc, msg) => acc + msg.message.length, 0);
        const avgLength = totalLength / userMessages.length;
        setAverageLengths(prev => [...prev, avgLength]);
        setNumChats(userMessages.length);

        // Update daily message count
        const messageDate = new Date(userMessages[userMessages.length - 1].timestamp).toISOString().split('T')[0];
        setDailyMessages(prev => ({
          ...prev,
          [messageDate]: (prev[messageDate] || 0) + 1
        }));
      }
    }
  }, [messages]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
      timestamp: new Date()
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        //"Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => data.json()).then((data) => {
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
        direction: "incoming",
        timestamp: new Date()
      }]);
      setTyping(false);
    }).catch(error => {
      console.error('Error processing message with ChatGPT', error);
      setTyping(false);
    });
  }

  const averageLengthData = {
    labels: Array.from({ length: averageLengths.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Average Message Length',
        data: averageLengths,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  const dailyMessagesData = {
    labels: Object.keys(dailyMessages),
    datasets: [
      {
        label: 'Messages per Day',
        data: Object.values(dailyMessages),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Average Length of Messages Over Time',
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Messages per Day',
      },
    },
  };

  const closeChat = () => {
    setChatHistory(prev => [...prev, messages]);
    try {
      localStorage.setItem('chatHistory', JSON.stringify([...chatHistory, messages]));
    } catch (e) {
      console.error('Error saving chat history to localStorage', e);
    }
    setMessages([]);
    setChatOpen(false);
  };

  const startNewChat = () => {
    setMessages([
      {
        message: "Hello, I am ChatGPT!",
        sender: "ChatGPT",
        direction: "incoming",
        timestamp: new Date()
      }
    ]);
    setChatOpen(true);
  };

  const loadChat = (index) => {
    const selectedChat = chatHistory[index];
    setMessages(selectedChat);
    setChatOpen(true);
  };

  return (
    <><Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage chatHistory={chatHistory} />} />
        <Route
          path="/app"
          element={<><Header>

          </Header>
            <Container>
              <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
                Welcome To ChatGPT
              </Typography>
              <Button title='close up your current chat and save it' variant="outlined" onClick={closeChat} style={{ marginBottom: '16px' }}>
                Save and end Chat
              </Button>
              <Button title="Open up a new chat" variant="outlined" onClick={startNewChat} style={{ marginBottom: '16px', marginLeft: '16px', alignItems: 'center' }}>
                <EditIcon />
              </Button>
              <Button variant="outlined" component={Link} to="/metrics" style={{ marginBottom: '16px', marginLeft: '16px' }}>
                Metrics
              </Button>
              <Button variant="outlined" title="Back to home page" component={Link} to="/"
                style={{ marginBottom: '16px', marginLeft: '16px', alignItems: 'center' }}
              >
                <HomeIcon />
              </Button>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Paper style={{ padding: '16px', border: '2px solid black', height: '600px', overflowY: 'auto' }}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', fontSize: 'large', textDecoration: 'underline' }}>
                      Chat History <FaHistory />
                    </Typography>
                    <List>
                      {chatHistory.map((chat, index) => (
                        <ListItem button key={index} onClick={() => loadChat(index)}>
                          <ListItemText title={`Chat ${index + 1}`} primary={`Chat ${index + 1}`} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  {chatOpen && (
                    <Paper style={{ padding: '16px', border: '2px solid black' }}>
                      <div style={{ position: 'relative', height: '600px', width: '100%' }}>
                        <MainContainer style={{ height: '100%', width: '100%' }}>
                          <ChatContainer style={{ height: 'calc(100% - 60px)', overflowY: 'auto' }}>
                            <MessageList typingIndicator={typing && <TypingIndicator content="ChatGPT is typing" />}>
                              {messages.map((message, i) => (
                                <Message key={i} model={message} style={{ margin: '10px', padding: '10px' }} />
                              ))}
                            </MessageList>
                            <MessageInput
                              placeholder="Type message here"
                              onSend={handleSend}
                              style={{ position: 'absolute', bottom: '0', width: '100%', borderTop: '1px solid #ccc' }} />
                          </ChatContainer>
                        </MainContainer>
                      </div>
                    </Paper>
                  )}
                </Grid>
              </Grid>
            </Container></>} />
        <Route
          path="/metrics"
          element={<Metrics
            averageLengths={averageLengths}
            dailyMessages={dailyMessages}
            numChats={numChats}
            averageLengthData={averageLengthData}
            dailyMessagesData={dailyMessagesData}
            options={options}
            barOptions={barOptions} />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;