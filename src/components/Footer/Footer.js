import React from 'react'
import './Footer.css'
import { connect } from 'react-redux'
import * as actions from '../../store/action/index'
const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src={props.track?.album.images[0].url}
                    alt=''
                />
                {true ? (
                    <div className="footer__songInfo">
                        <h4>{props.track?.name}</h4>
                        <p>{props.track?.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                        <div className="footer__songInfo">
                            <h4>No song is playing</h4>
                            <p>...</p>
                        </div>
                    )}
            </div>

            <div className="footer__center">
                {props.song}
            </div>



        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.token,
        track: state.track,
        url: state.url,
        song: state.song
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setToken: (token) => dispatch(actions.setToken(token)),
        setUser: (user) => dispatch(actions.setUser(user)),
        setPlayLists: (playlists) => dispatch(actions.setPlaylists(playlists))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);