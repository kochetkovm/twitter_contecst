import React from "react";
import {UserContext} from "../App";

class UserAvatar extends React.Component {
    render() {
        return (
            <UserContext.Consumer>{ value => (

                <img
                    className={`user-avatar ${this.props.size || ""}`}
                    alt='User avatar'
                    src={value.user.avatar}
                />
            )
            }
        </UserContext.Consumer>
        );
    }

}

export default UserAvatar;