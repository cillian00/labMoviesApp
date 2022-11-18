import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );