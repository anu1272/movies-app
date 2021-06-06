import { createStore } from "redux";

const initialState={
    "moviesList":[],
    "selectedMovie": '',
    "selectedMovieArtists": ''
}

function MoviesReducer(state = initialState, action){

    switch(action.type){
        case "MOVIES_LIST":
            return {...state, "moviesList":action.payload}
        case "SELECTED_MOVIE_ID":
            return {...state, "selectedMovie":action.payload}
        case "SELECTED_MOVIE_ARTISTS":
                return {...state, "selectedMovieArtists":action.payload}
        default:
            return state;
    }
   
}

export default createStore(MoviesReducer);