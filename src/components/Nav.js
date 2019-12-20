import React from "react";
import UserAvatar from "./UserAvatar";

class Nav extends React.Component{
    render() {
        return(
            <div className='nav'>
                <UserAvatar size='small'/>
            </div>
        )
    }
}
export default Nav;