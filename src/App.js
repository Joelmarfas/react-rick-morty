import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Episode from "./pages/Episode/Episode";
import NewComponent from "./components/NewComponent";
// import CharacterCard from "./components/CharacterCard";
// import EpisodeCard from "./components/EpisodeCard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:characterId" component={NewComponent} />
        <Route path="/:episodeId" component={Episode} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
