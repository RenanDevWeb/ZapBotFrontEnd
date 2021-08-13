
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './pages/chat'
import Home from './pages/Home';

function App() {
  return (
  <Router>
    <div className="App">
  <Switch>
     <Route exact path="/" component={Home} />     
    <Route path="/chat" component={Chat} />     
  </Switch>
    </div>
  </Router>
  );
}

export default App;
