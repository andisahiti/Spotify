import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import * as actions from '../../store/action/index'
import { connect } from "react-redux";
const Sidebar = React.memo((props) => {

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotifyLogo"
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {props.playlists.map((playlist, index) => {

                return (
                    <SidebarOption clicked={() => {
                        props.getId(playlist.id)
                    }} key={playlist.id} title={playlist.name} />
                )
            })}
        </div>
    );
})
const mapStateToProps = state => {
    return {
        playlists: state.playlists
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getId: (id) => dispatch(actions.getClickedPlaylist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
