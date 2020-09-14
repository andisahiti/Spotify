import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { connect } from "react-redux";
const Sidebar = (props) => {
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
            {props.playlists.map((playlist) => {
                return (
                    <SidebarOption title={playlist.name} />
                )
            })}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        playlists: state.playlists
    }
}

export default connect(mapStateToProps)(Sidebar);
