import React from "react";
import { Route } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import LocationsList from './components/LocationsList.js';
import EpisodesList from './components/EpisodesList.js';
import EpisodeCard from './components/EpisodeCard.js';
import LocationCard from './components/LocationCard';
import CharacterCard from './components/CharacterCard';

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
      path="/characterList"
      component={CharacterList}
      />
      <Route 
      path="/locationsList"
      component={LocationsList}
      />
      <Route
      path="/episodesList/"
      component={EpisodesList}
      />
      <Route
      path="/episodesList/:id"
      component={EpisodeCard}    
      />
     <Route
      path="/locationsList/:id"
      component={LocationCard}
      />
      {/* <Route
      path="/CharacterCard"
      component={CharacterCard}
      /> */}
    </main>

  );
}
