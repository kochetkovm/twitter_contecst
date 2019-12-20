import React from "react";
import UserAvatar from "./UserAvatar";
import {UserContext} from "../App";

class UserStats extends React.Component {
    render() {
        return (
            <UserContext.Consumer>{
                val => (

                    <div className='user-stats'>
                        <div>
                            <UserAvatar/>
                            {val.user.name}
                        </div>
                        <div className='stats'>
                            <div>Followers{val.user.followers}</div>
                            <div>Following{val.user.following}</div>
                        </div>
                    </div>
                )
            }
            </UserContext.Consumer>
        );

    }

}

export default UserStats;