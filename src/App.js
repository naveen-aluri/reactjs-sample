import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages';

function App() {
  return (
    <Router basename='/reactjs-sample'>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
