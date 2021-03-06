import "./App.css";
import "./App-1024px.css";
import "./App-800px.css";
import "./App-640px.css";
import "./App-480px.css";
import ChatBox from "./components/ChatBox/ChatBox";
import LoginForm from "./components/LoginForm/LoginForm";
import React, { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState("null");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {isAuthenticated ? (
        <ChatBox currentUser={currentUser} />
      ) : (
        <LoginForm
          setCurrentUser={setCurrentUser}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
    </div>
  );
}

export default App;
