import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles/';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import './Home.css';

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    pointer: {
      cursor: 'pointer',
    }
  }));

  const useStyles2 = makeStyles(theme => ({
    root: {
      maxWidth: 340,
    },
    title: {
      fontSize: 14,
      color: theme.palette.primary.light,
    },
 }));

  const useStyles3 = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 240,
      maxWidth: 240,
    },
  }));

export default function Home() {
   
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();

    const [moviesList,setMoviesList] = useState([]);
    const [genresList,setGenresList] = useState([]);
    const [artistsList,setArtistsList] = useState([]);

    async function loadMovies(){
      const rawResponse = await fetch("http://localhost:8085/api/v1/movies?page=1&limit=10")
      const data = await rawResponse.json()
      setMoviesList(data.movies);
    }

    async function loadGenres(){
      const rawResponse = await fetch("http://localhost:8085/api/v1/genres")
      const data = await rawResponse.json()
      setGenresList(data.genres);
    }
  
    async function loadArtists(){
      const rawResponse = await fetch("http://localhost:8085/api/v1/artists")
      const data = await rawResponse.json()
      setArtistsList(data.artists);
    }

  const [addMovieFilters,setMovieFilters] = useState({
       artist: '',
       movieName: '',
       genre: '',
       releaseDateStart: '',
       releaseDateEnd: ''
    });

    //var myMovieFilters = new Set();

    const inputChangeHandler = (e) => {
      const state = addMovieFilters;
      state[e.target.name] = e.target.value;
      setMovieFilters({...state});
      //myMovieFilters.add(addMovieFilters.artist);
      //console.log(myMovieFilters);
   }



   // const { movieName, artist, genre, releaseDateStart, releaseDateEnd } = addMovieFilters;

   // const applyMovieFilters = (e) => {
    
    
    // console.log('======= apply movie filter =========');
    // console.log(addMovieFilters);
    // console.log(addMovieFilters.artist);

    //  var finalPassArray = [];
    //    finalPassArray.push(
    //     moviesList.filter((movie) => {
    //       //console.log(movie);
    //       movie.artists.map(artist => (
    //           //console.log(artist)
    //           artist.first_name.toUpperCase() === addMovieFilters.artist.toUpperCase()
    //       ))
    //     })
    //   )

 // }
 
    useEffect(()=>{
      loadMovies();
      loadGenres();
      loadArtists();
    },[])

    return(
      <div>
          <div className="upcoming-movies-header">Upcoming Movies</div>
          <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={6}>
              {moviesList.map(movie => 
              (
                <GridListTile key={movie.id} >
                  <img src={movie.poster_url} alt={movie.title} />
                  <GridListTileBar title={movie.title}
                    actionIcon={
                      <IconButton aria-label={classes.title} className={classes.icon} />
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

          <div className="flex-container">
            <div className="released-movies">
              <div className={classes.root}>
              <GridList cellHeight={350} cols={4}>
              {moviesList.map(movie => (
                <GridListTile key={movie.id} >
                  <img src={movie.poster_url} alt={movie.title} className={classes.pointer}/>
                  <GridListTileBar
                    title={movie.title}
                    subtitle={<span>Release Date: {movie.release_date}</span>}
                    actionIcon={
                      <IconButton aria-label={classes.title} className={classes.icon} />
                    }
                  />
                </GridListTile>
              ))}
              </GridList>
            </div>
            </div>
              <div className="released-movies-filterBy">
              <Card className={classes2.root} variant="outlined">
                <CardContent>
                <Typography className={classes2.title} color="textSecondary" gutterBottom>
                      FIND MOVIES BY:
                </Typography>
                <FormControl className={classes3.formControl}>
                  <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                  <Input id="movieName" name="movieName" onChange={inputChangeHandler} ></Input>
                </FormControl>
            
            
               <FormControl className={classes3.formControl}>
                    <InputLabel htmlFor="genre">Genres</InputLabel>
                    <Select id="genre" name="genre" onChange={inputChangeHandler}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        {genresList.map(genres => (
                          <MenuItem key={genres.id} value={genres.genre} >{genres.genre}</MenuItem>
                        ))}
                    </Select>
                </FormControl><br/>


                <FormControl className={classes3.formControl}>
                    <InputLabel htmlFor="movie-artists">Artists</InputLabel>
                    <Select id="artist" name="artist" onChange={inputChangeHandler}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        {artistsList.map(artist => (
                          <MenuItem key={artist.id} value={artist.first_name} >{artist.first_name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl className={classes3.formControl}>
                  <Typography>Release Date Start</Typography>
                      <Input type="date" id="releaseDateStart" name="releaseDateStart" onChange={inputChangeHandler} />
                </FormControl><br/>


                <FormControl className={classes3.formControl}>
                <Typography>Release Date End</Typography>
                      <Input type="date" id="releaseDateEnd" name="releaseDateEnd" onChange={inputChangeHandler} />
                </FormControl><br/>
               
            
                {/* <FormControl className={classes3.formControl}>
                <Select  id="artists" name="artists" value={ Array.from(myMovieFilters)[0]}>
                  {artistsList.map(artist => (
                  <MenuItem key={artist.id} value={artist.id}>
                      <Checkbox checked={myMovieFilters.has(artist.first_name) ? true : false } onChange={inputCBChangedHandler} id="artist" name="artist" value={artist.first_name} />
                      <ListItemText primary={artist.first_name} />
                  </MenuItem>
                  ))}
                </Select>
                </FormControl><br/> */}
                               
                <FormControl className={classes3.formControl}>
                    <Button variant="contained" color="primary" >Apply</Button>
                </FormControl>              

                </CardContent>
                </Card>
              </div>
          </div>
      </div>
    )      
}