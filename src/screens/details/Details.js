import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles/';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import BookShowHeader from '../../common/header/BookShowHeader';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import './Details.css';


const useStyles = makeStyles(theme => ({
    backUrl: {
        fontSize: '1.2rem',
        marginLeft: '24px',
        marginTop: '8px',
        marginBottom: '10px',
        height: '24px',
        cursor: 'pointer',
    },
    info: {
        marginTop: '16px',
    },
    artistsInfo: {
        marginTop: '16px',
        marginBottom: '16px',
    },
    title: {
        color: theme.palette.primary.light,
      },    
 }));

 function _onReady(event) {
    event.target.pauseVideo();
  }

export default function Details() {

    const classes = useStyles();

    const selectedMovie = useSelector(state => state.selectedMovie)
    const selectedMovieArtists = useSelector(state => state.selectedMovieArtists)

    //console.log(selectedMovie.trailer_url.toString().split("="));

    if(!selectedMovieArtists.artists){
        return null;
    }

  return (
    <div>
        <BookShowHeader/>
        <Typography className={classes.backUrl}>
            <Link to="/"> &#60; Back to Home</Link>
        </Typography>
        
        <div className="flex-container">
       
        <div className="movie-poster">
            <img src={selectedMovie.poster_url} />
        </div>    
       
        <div className="movie-trailer-info">
        <Typography variant="h2">
            <span>{selectedMovie.title}</span> 
        </Typography>
        <Typography>
            <span><b>Genres:&nbsp;</b>{selectedMovie.genres}</span>             
        </Typography>
        <Typography>
            <span><b>Duration:&nbsp;</b>{selectedMovie.duration}</span>             
        </Typography>
        <Typography>
            <span><b>Release Date:&nbsp;</b>{selectedMovie.release_date}</span>             
        </Typography>
        <Typography>
            <span><b>Rating:&nbsp;</b>{selectedMovie.rating}</span>             
        </Typography>
        <Typography className={classes.info}>
            <span><b>Plot:&nbsp;</b>&#40; <a href={selectedMovie.wiki_url}>Wiki Url</a>&#41;&nbsp;{selectedMovie.storyline}</span>             
        </Typography>
        <Typography className={classes.info}>
            <span><b>Trailer:&nbsp;</b></span>
            <YouTube videoId="J76wN0TPI4" className={classes.player} onReady={_onReady} autoplay/>
        </Typography>
        </div> 
       
        <div className="movie-artists-ratings">
        <Typography>
            <span><b>Rate this movie:&nbsp;</b></span><br/>  
            <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
        </Typography>
         <Typography className={classes.artistsInfo}>
            <span><b>Artists:&nbsp;</b></span><br/>  
              <div className={classes.root}>
              <GridList cellHeight={350} cols={2}>
              {selectedMovieArtists.artists.map(artist => (
                <GridListTile key={artist.id} >
                        <img src={artist.profile_url} alt={artist.first_name} />
                  <GridListTileBar
                    title={artist.first_name}
                    actionIcon={
                      <IconButton aria-label={classes.title} />
                    }
                  />
                </GridListTile>
              ))}
              </GridList>
            </div>
        </Typography>
        </div>        
        </div>    
    </div>
    )
}
