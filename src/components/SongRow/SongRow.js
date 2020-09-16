import React from "react";
import "./SongRow.css";
import * as actions from '../../store/action/index'
import { connect } from "react-redux";
const SongRow = (props) => {
    return (
        <div onClick={() => {
            props.getSongUrl(props.track?.preview_url)
            setTimeout(() => {
                props.getSong(props.track)
            }, 100)
        }} className="songRow" >
            <img className="songRow__album" src={props.track?.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{props.track?.name}</h1>
                <p>
                    {props.track?.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {props.track?.album.name}
                </p>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getSong: (track) => dispatch(actions.getSong(track)),
        getSongUrl: (url) => dispatch(actions.getSongUrl(url))
    }
}

export default connect(null, mapDispatchToProps)(SongRow);