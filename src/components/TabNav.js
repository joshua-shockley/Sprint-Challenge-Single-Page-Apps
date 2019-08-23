import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
// export default function TabNav() {

//     return(
//         <div>
//             <header>
//                 <div>
//                 <NavLink exact to={`/`}>Home</NavLink>
//                 </div>
//                 <div>
//                 <NavLink exact to={`/`}>Locations</NavLink>
//                 </div>
//                 <div>
//                 <NavLink exact to={`/`}>Characters</NavLink>
//                 </div>
    
//             </header>
//         </div>
//     );
// };

const panes = [
{ menuItem: 'MENU', render: () => <Tab.Pane><NavLink exact to={`/`}>Home</NavLink>    <NavLink exact to={`/LocationCard`}>Locations</NavLink>   <NavLink exact to={`/CharacterCard`}>Characters</NavLink></Tab.Pane> },
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;

