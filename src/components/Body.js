import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";

class Body extends React.Component {
    render() {
        return(
            <div className='body'>
                <SideBar />
                <Content/>
            </div>
        )
    }

}

export default Body;