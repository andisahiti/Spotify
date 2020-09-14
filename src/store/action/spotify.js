import * as actionTypes from './actionTypes'


export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user: user
    }
}
export const setPlaying = (playing) => {
    return {
        type: actionTypes.SET_PLAYING,
        playing: playing
    }
}
export const setItem = (item) => {
    return {
        type: actionTypes.SET_ITEM,
        item: item
    }
}
export const setRandomPlaylist = (randomPlaylist) => {
    return {
        type: actionTypes.SET_RANDOM_PLAYLIST,
        randomPlaylist: randomPlaylist
    }
}
export const setTopArtists = (top_artists) => {
    return {
        type: actionTypes.SET_TOP_ARTISTS,
        top_artists: top_artists
    }
}
export const setToken = (token) => {
    return {
        type: actionTypes.SET_TOKEN,
        token: token
    }
}
export const setSpotify = (spotify) => {
    return {
        type: actionTypes.SET_SPOTIFY,
        spotify: spotify
    }
}
export const setPlaylists = (playlists) => {
    return {
        type: actionTypes.SET_PLAYLISTS,
        playlists: playlists
    }
}