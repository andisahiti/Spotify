import React from 'react'

import * as actionTypes from '../action/actionTypes'
const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playlistClicked: null,
  top_artists: null,
  playing: false,
  item: null,
  id: '',
  track: null,
  song: <audio autoPlay controls>
    <source src={''} />
  </audio>
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

    case actionTypes.SET_PLAYLIST:

      return {
        ...state,
        playlistClicked: action.playlist,
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
    case actionTypes.PLAYLIST_ID:
      return {
        ...state,
        id: action.id,
      };
    case actionTypes.GET_SONG_URL:
      return {
        ...state,
        song: null
      };
    case actionTypes.GET_SONG:
      return {
        ...state,
        track: action.track,
        song: <audio autoPlay controls>
          <source src={action.track.preview_url} />
        </audio>
      };

    case actionTypes.SET_PLAYLISTS:
      const newArr = action.playlists.items;

      return {
        ...state,
        playlists: newArr,
        id: newArr[0].id
      };
    default:
      return state;
  }
};

export default reducer;
