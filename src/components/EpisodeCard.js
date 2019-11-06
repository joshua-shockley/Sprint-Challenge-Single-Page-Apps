import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
    

//I'v tried doing this in a number of different ways that were from our examples througt the week... I wasnt able to keep my head straight... 
//The examples that were i the tk had the react dom covered by the 

const EpisodeCard = (props) => {
const [theEpisode, setTheEpisode] = useState({});
// console.log(props);
const id = props.match.params.id;

useEffect(()=> {
const getMyEpisode = ( ) => {
// let myEpisode = [];
// setTheEpisode.map((myEpisode, i )=> {
// myEpisode={...myEpisode, myEpisode} 
// })

axios
.get(`https://rickandmortyapi.com/api/episode/`)
.then(response => {
  // const theEpisode = response.data.results;
    setTheEpisode(response.data.results);
      console.log(response.data.results);
      // const id = props.match.params.id;
})
.catch(error => {
    console.log(error);
});

}
// getMyEpisodes(i);

}, []);
    if (!theEpisode) {
        return (<div> Loading Episode Information....... </div>);
    }
       
    const{ name, air_date } = theEpisode;

    return (
<Card>
    <Card.Content>
    <Card.Meta>
      <p>NAME: {theEpisode.name}</p>
      <p>Air Date: {theEpisode.air_date}</p>
    </Card.Meta>
  </Card.Content>
</Card>
        
    );


}

// export function EpisodeDetails ({})
// return (
       
//   <Card>
//   <Card.Content>
//     <Card.Meta>
//       <p>NAME: {theEpisode.name}</p>
//       <p>Air Date: {theEpisode.air_date}</p>
//     </Card.Meta>
//   </Card.Content>
// </Card>

// );



export default EpisodeCard;