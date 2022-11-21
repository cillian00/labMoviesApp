import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'


const AddToAddList = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToAddList = (e) => {
    e.preventDefault();
    context.addToAddList(movie);
  };

  return (
    <IconButton aria-label="add to addList" onClick={handleAddToAddList}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToAddList;