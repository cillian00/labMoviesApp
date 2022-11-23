import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import PlaylistAddIcon from '../components/cardIcons/addToAddList'

const HeaderTVShow = (props) => {
  const tvs = props.tvs;
  const playlists = JSON.parse(localStorage.getItem("playlists")); 
  const navigate = useNavigate();



  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <div>
        {
          tvs.playlists ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <PlaylistAddIcon />
            </Avatar>
          ) : null
        }
        </div>
      <Typography variant="h4" component="h3">
        {tvs.title}
        <a href={tvs.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${tvs.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default HeaderTVShow;