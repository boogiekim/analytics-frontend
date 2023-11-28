import React from 'react';
import MainLayout from './components/layout/MainLayout';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import TableauView from './components/views/TableauView';
import QuicksightView from './components/views/QuicksightView';
import Home from './components/views/Home';
import Footer from './components/layout/Footer';
import 'tabler-react/dist/Tabler.css';
import './App.css';

// Import any other components or styles you need

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="App-content">
            <Switch>
              <Route exact path="/" component={QuicksightView} />
              <Route path="/tableau" component={TableauView} />
              <Route path="/quicksight" component={QuicksightView} />
            </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
