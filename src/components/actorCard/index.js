import React, { useContext  } from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";

export default function ActorCard({ actors, action }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        
            <CardMedia
        sx={{ height: 500 }}
        image={
            actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actors.known_for_department}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actors.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(actors)}
    <Link to={`/movies/${actors.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}