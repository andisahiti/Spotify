import React from 'react'
import './Main.css'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Header from '../Header/Header'
import { connect } from 'react-redux';
import SongRow from '../SongRow/SongRow'
const Main = (props) => {

    return (
        <div className='body'>
            <Header spotify={props.spotify} />

            <div className="body__info">
                <img src={props.playlistClicked?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{props.playlistClicked?.name}</h2>
                    <p>{props.playlistClicked?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"

                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {props.playlistClicked?.tracks.items.map((item, index) => {
                    return (
                        <SongRow key={index} track={item.track}></SongRow>
                    )
                })}

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playlistClicked: state.playlistClicked
    }
}
export default connect(mapStateToProps)(Main);