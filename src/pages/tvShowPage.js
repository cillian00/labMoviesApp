import React from "react";
import { getTVShows} from "../api/tmdb-api";
import PageTemplate from '../components/tvListPageTemplate';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TvShowPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tv Show', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = tvs.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular TV Shows"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavouritesIcon tvs={tv} />
      }}
    />
);
};
export default TvShowPage;