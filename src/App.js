import React from "react";
import { Route } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import LocationsList from './components/LocationsList.js';
import EpisodesList from './components/EpisodesList.js';
import EpisodeCard from './components/EpisodeCard.js';

export default function App() {


  return (
    <main>
      <Header />
      <TabNav />
      <Route
      exact path="/"
      component={WelcomePage}
      />
      <Route 
      path="/CharacterList"
      component={CharacterList}
      />
      <Route 
      path="/LocationsList"
      component={LocationsList}
      />
      <Route
      path="/EpisodesList"
      component={EpisodesList}
      />
      <Route
      path="/episodes/:id"
      render={episodes => (<EpisodeCard {...episodes} 
      key={episodes.id}/>)}
      // component={EpisodeCard}
      />
      {/* <Route
      path="/LocationCard"
      component={LocationCard}
      />
      <Route
      path="/CharacterCard"
      component={CharacterCard}
      /> */}
    </main>

  );
}
