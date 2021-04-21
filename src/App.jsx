import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={API_KEY}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
