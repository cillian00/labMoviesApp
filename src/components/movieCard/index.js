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


export default function MovieCard({ movie, action }) {
  const { favourites, addToFavourites } = useContext(MoviesContext);
 
   if (favourites.find((id) => id === movie.id)) {
     movie.favourite = true;
   } else {
     movie.favourite = false
   }
 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavourites(movie);
   };
  return (




//     <div class="card">
//   <div class="card__inner">
//     <header class="card__header">
//       <nav class="card__nav">
//         <ul class="list list--nav">
//           <li><a href="#">Movie</a></li>
//           <li><a href="#">Trivia</a></li>
//           <li><a href="#">Reviews</a></li>
//         </ul>
//       </nav>
//     </header>
    
//     <main class="card__body">
      
//       <div class="card__info">
//         <h1 class="card__title">Captain America: Civil War</h1>
    
//         <p class="card__slug">Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.</p>
      
//         <button class="card__btn" value="Watch trailer">Watch trailer</button>

//         <div class="card__rating">
//           8.2
//         </div>
//       </div>
//     </main>
    
//     <footer class="card__footer">
//       <ul class="list list--info">
//         <li>2016</li>
//         <li>122 min</li>
//         <li>Action | Sci-Fi</li>
//       </ul>
//     </footer>
//   </div>
// </div>
    <Card sx={{ maxWidth: 345 }}>
   <CardHeader
        avatar={
          movie.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
            <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(movie)}
    <Link to={`/movies/${movie.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}