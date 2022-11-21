import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getMovieUpcoming } from "../api/tmdb-api";
import PlaylistAddIcon from '../components/cardIcons/addToAddList'

const MovieUpcomingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getMovieUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const addList = movies.filter(m => m.addList)
  localStorage.setItem('addList', JSON.stringify(addList))

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
);
};
export default MovieUpcomingPage;