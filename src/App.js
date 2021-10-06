import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Episode from "./pages/Episode/Episode";
import Character from "./pages/Character/Character";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:characterId" component={Character} />
        <Route path="/episode/:episodeId" component={Episode} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
