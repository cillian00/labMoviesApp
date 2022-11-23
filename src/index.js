import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TVSeriesPage from "./pages/tvSeriesPage.js";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
//import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MovieUpcomingPage from "./pages/movieUpcomingPage"
import TvShowPage from "./pages/tvShowPage"
import ActorShowPage from "./pages/actorShowPage"
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
    <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/tv/:id" element={<TVSeriesPage />} />
        <Route path="/pages/moviesupcomingpage" element={<MovieUpcomingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/actorShowPage" element={<ActorShowPage />} />
        <Route path="/pages/tvshowpage" element={<TvShowPage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      </Routes>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);