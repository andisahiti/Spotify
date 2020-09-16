import React from 'react'
import './SidebarOption.css'
const SidebarOption = ({ title, Icon, clicked }) => {
    return (
        <div onClick={clicked} className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon'></Icon>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;
