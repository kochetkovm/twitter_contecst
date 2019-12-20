import React from "react";
import UserStats from "./UserStats";

class SideBar extends React.Component {
    render() {
        return(
            <div className='sidebar'>
                <UserStats />
            </div>
        )
    }

}

export default SideBar;