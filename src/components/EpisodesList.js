import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function EpisodesList() {

const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = () =>{
    axios
    .get('https://rickandmortyapi.com/api/episode/')
    .then(response => {
      setEpisodes(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log('server error', error);
    });
  }
  getEpisodes();
    

  }, []);

  console.log(episodes);

  return (
    <section className="episodes-list grid-view">
      <>
      {episodes.map(episodes => (
        <EpisodesDetails key={episodes.id} episodes={episodes}/>
      ))}
      </>

    </section>
  );
}

export function EpisodesDetails ({episodes}){
    const{episode, name, air_date, characters } = episodes
      return(
        <Card>
          <Link to={'/EpisodesCard'}>
        <Card.Content>
          <Card.Header>Episode: {episode}</Card.Header>
          <Card.Meta>
            <p>NAME: {name}</p>
            <p>Air Date: {air_date}</p>
            <Card.Content >
           <h4>Characters</h4>
           {characters.length}
            </Card.Content>
          </Card.Meta>
        </Card.Content>
          </Link>
      </Card>
      );
    }
