import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

const Header = (props) => {

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input

                    placeholder="Search..."
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src={props.user?.images[0]?.url} alt={props.user?.display_name} />
                <h4>{props.user?.display_name}</h4>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);