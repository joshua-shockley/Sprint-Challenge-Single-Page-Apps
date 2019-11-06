import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function LocationsList() {

const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    const getLocations = () =>{
    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(response => {
      setLocations(response.data.results);
      console.log(response.data.results);
    })
    .catch(error => {
      console.log('server error', error);
    });
  }
  getLocations();
    
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);

  console.log(locations);

  return (
    <section className="locations-list grid-view">
      <>
      {locations.map(locations => (
        <LocationsDetails key={locations.id} locations={locations}/>
      ))}
      </>

    </section>
  );
}

export function LocationsDetails ({locations}){
    const{dimension, name, type, created} = locations
      return(
        <Card>
          <Link to={'/LocationsCard'}>
        <Card.Content>
          <Card.Header>DIMENSION: {dimension}</Card.Header>
          <Card.Meta>
            <p>NAME: {name}</p>
            <p>TYPE: {type}</p>
            <p>CREATED: {created}</p>

          </Card.Meta>
        </Card.Content>
          </Link>
      </Card>
      );
    }
    
