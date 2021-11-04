import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calls from './components/calls';
import CallDetails from './components/call-details';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact><Calls showArchived={false} /></Route>
        <Route path="/inbox" exact><Calls showArchived={false} /></Route>
        <Route path="/all" exact><Calls showArchived={true} /></Route>
        <Route path="/:prev/details/:id" component={CallDetails} />
      </div>
    </Router>
  );
}

export default App;
