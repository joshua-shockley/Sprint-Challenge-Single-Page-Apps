import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';




export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
const id = props.match.params.id;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getCharacters = () =>{
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacter(response.data.results);
      console.log(response.data);
    })
    .catch(error => {
      console.log('server error', error);
    });
  }
  getCharacters();
    
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);
  console.log(character);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <>
      {character.map(character => (
        <CharacterDetails key={character.id} character={character}/>
      ))}
      </>

    </section>
  );
}

export function CharacterDetails ({character}){
const{name, image, created, status, species} = character
  return(
    <Card>
      <Link to={'/CharacterCard'}>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Created: {created}</span>
      </Card.Meta>
      <Card.Description>
        {name} is a {species}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='aliveOrDead' />
        {status}
      </a>
    </Card.Content>
      </Link>
  </Card>
  );
}
