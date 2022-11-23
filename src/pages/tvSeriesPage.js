import React from "react";
import { useParams } from 'react-router-dom';
import TVSeriesDetails from "../components/tvSeriesDetails/";
import PageTemplate from "../components/templateTVPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const TVSeriesPage = (props) => {
  const { id } = useParams();

  const { data: tvs, error, isLoading, isError } = useQuery(
    ["tvs", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {tvs ? (
        <>
          <PageTemplate tvs={tvs}>
            <TVSeriesDetails tvs={tvs}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Series Details</p>
      )}
    </>
  );
};

export default TVSeriesPage;