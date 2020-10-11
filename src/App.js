import React from 'react'
import './App.css'
import AddTweet from './components/AddTweet'
import TweetsList from './components/TweetsList'

function App() {
  return (
    <div className="App">
      <AddTweet />
      <div className="dark"></div>
      <TweetsList />
    </div>
  );
}

export default App
