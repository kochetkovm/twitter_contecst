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
                    onClick={() => {
                        let url = prompt("Enter new avatar url: ");
                        value.changeAvatar(url);
                    }}
                />
            )
            }
        </UserContext.Consumer>
        );
    }

}

export default UserAvatar;