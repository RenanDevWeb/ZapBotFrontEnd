
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './pages/chat'
import Home from './pages/Home'; 
import Configuracoes from './pages/configuracoes'; 

function App() {
  return (
  <Router>
    <div className="App">
  <Switch>
     <Route exact path="/" component={Home} />     
     <Route path="/chat" component={Chat} />     
     <Route path="/configuracoes" component={Configuracoes} />     
  </Switch>
    </div>
  </Router>
  );
}

export default App;
