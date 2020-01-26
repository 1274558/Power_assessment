import React, { Component} from 'react';
import Header from './components/Header/Header';
import TVShow from './components/TVShow/TVShow';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={TVShow} />
            <Route path="/episodes/:showid/:episodeseason/:episodenumber" component={EpisodeDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
