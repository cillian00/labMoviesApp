import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const chip = { margin: 0.5 };

  const TVSeriesDetails = ({ tvs }) => {  // Don't miss this!
    const [drawerOpen, setDrawerOpen] = useState(false);
  

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvs.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {tvs.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        {/* <Chip icon={<AccessTimeIcon />} label={`${tvs.runtime} min.`} /> */}
        <Chip
          icon={<MonetizationIcon />}
     //     label={`${tvs.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${tvs.vote_average} (${tvs.vote_count}`}
        />
        <Chip label={`Released: ${tvs.first_air_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {/* {tvs.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))} */}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        sx={{
            position: "fixed",
            bottom: 2,
            right: 2
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
    </>
  );
};

export default  TVSeriesDetails ;
