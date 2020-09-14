import * as actionTypes from '../action/actionTypes'
const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  randomPlaylist: null,
  top_artists: null,
  playing: false,
  item: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };

    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case actionTypes.SET_RANDOM_PLAYLIST:
      return {
        ...state,
        randomPlaylist: action.randomPlaylist,
      };

    case actionTypes.SET_TOP_ARTISTS:
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case actionTypes.SET_SPOTIFY:
      return {
        ...state,
        spotify: action.spotify,
      };

    case actionTypes.SET_PLAYLISTS:
      const newArr = action.playlists.items;
      return {
        ...state,
        playlists: newArr,
      };
    default:
      return state;
  }
};

export default reducer;
