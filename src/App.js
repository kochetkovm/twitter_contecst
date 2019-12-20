import React from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";

export const UserContext = React.createContext();

class App extends React.Component{
  state = {
    user:{
      avatar:"https://www.gravatar.com/avatar/0?d=monsterid",
      name: "Monster",
      followers: 1000,
      following: 100
    }
  }
    changeAvatar = (url) => {
        let tmp = this.state.user;
        tmp.avatar = url;
        this.setState({user: tmp});
            }

  render() {
    return(
        <div className='app'>
         <UserContext.Provider value={
             {
                 user: this.state.user,
                 changeAvatar: this.changeAvatar
             }
         }>
             <Nav />
             <Body />
         </UserContext.Provider>
        </div>
    )
  }
}
export default App;