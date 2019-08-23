import React from "react";
import { Tab } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
// export default function TabNav() {


const panes = [
{ menuItem: 'MENU', render: () => 
<Tab.Pane>
    <NavLink exact to={`/`}>Home</NavLink>  
    <NavLink exact to={`/LocationsList`}>Locations</NavLink>   
    <NavLink exact to={`/CharacterList`}>Characters</NavLink>  
    <NavLink exact to={`/EpisodesList`}>Episodes</NavLink>
</Tab.Pane> },
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;

