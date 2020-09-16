import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { connect } from 'react-redux'
import Player from "./containers/Player/Player";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./containers/Login/Login";
import * as actions from './store/action/index'
const spotify = new SpotifyWebApi();

const App = (props) => {
  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    // me hek token prej urls
    window.location.hash = "";
    let _token = hash.access_token;
    if (_token) {
      //ja jepum access tokenin qati apije e kur e bojna qata mujna me komunniku lirshem me qat api dhe spotify servises
      spotify.setAccessToken(_token);

      props.setToken(_token)
      //returns the users acc kthen promise

      spotify.getMe().then((user) => {
        props.setUser(user)
      }).catch(error => {
        console.log(error)
      });

      spotify.getUserPlaylists().then((playlists) => {
        props.setPlayLists(playlists)
      }).catch(error => {
        console.log(error)
      });
    }
  }, [props]);


  useEffect(() => {
    spotify.getPlaylist(props.id).then(response => {
      props.setPlayList(response)
    }).catch(error => {
    })

  }, [props])


  return (
    <div className="app">
      {!props.token && <Login />}
      {props.token && <Player spotify={spotify} />}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    token: state.token,
    playlists: state.playlists,
    id: state.id,
    track: state.track
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: (token) => dispatch(actions.setToken(token)),
    setUser: (user) => dispatch(actions.setUser(user)),
    setPlayLists: (playlists) => dispatch(actions.setPlaylists(playlists)),
    setPlayList: (playlist) => dispatch(actions.setPlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

