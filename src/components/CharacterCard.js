import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }
const CharacterCard = (props) => {
  const [character, setCharacter] = useState();
console.log(props);
const id = props.match.params.id;
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
       axios
        .get(`https://rickandmortyapi.com/api/character/status/${id}`)
        .then(response => {
          setCharacter(response);
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });

   },[id]);

  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!character) {
    return <div>Loading character information...</div>;
  }

  // const character = ({... character, character.id });
  return (
    <div className="save-wrapper">
      {/* <div className="movie-card">
        <h2>{name}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {(!stars) 
        ?<div>Loading Stars....</div>
        :stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div> */}
    </div>
  );
}

export default CharacterCard;
