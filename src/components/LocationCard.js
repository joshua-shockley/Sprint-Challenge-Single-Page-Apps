import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return <span>todo: location</span>;
}
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'semantic-ui-react';
    



// const EpisodeCard = (props) => {
// const [theEpisode, setTheEpisode] = useState([]);
// console.log(props);
// const id = props.match.params.id;
// useEffect(()=> {
// axios
// .get(`https://rickandmortyapi.com/api/episode/`)
// .then(response => {
//     setTheEpisode(response.data);
//     console.log(response.data);
// })
// .catch(error => {
//     console.log(error);
// });

// }, [id]);
    
//     if (!theEpisode) {
//         return (<div> Loading Episode Information....... </div>);
//     }
       
//     const{ name, air_date } = theEpisode;

//     return (
       
//           <Card>
//           <Card.Content>
//             <Card.Meta>
//               <p>NAME: {theLocation.name}</p>
//               <p>Air Date: {theLocation.air_date}</p>
//             </Card.Meta>
//           </Card.Content>
//         </Card>
        
//     );


// }
// export default LocationCard;