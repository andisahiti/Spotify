import React from 'react'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import SideBar from '../../components/SideBar/SideBar'
import './Player.css'



const Player = ({ spotify }) => {
    return (
        <div className='player'>
            <div className="player__body">

                <SideBar></SideBar>
                <Main spotify={spotify}></Main>
            </div>
            <Footer spotify={spotify}></Footer>
        </div>
    )
}

export default Player
