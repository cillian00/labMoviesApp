import React from "react";
import { getActors} from "../api/tmdb-api";
import PageTemplate from '../components/templateActorList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const ActorShowPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (actorID) => true 

  return (
    <PageTemplate
      title="Popular Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actors={actor} />
      }}
    />
);
};
export default ActorShowPage;