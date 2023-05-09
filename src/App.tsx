import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";


export type AppPropsType = {
    state: RootStateType,
    addPost: (postMessage: string) => void
    addMessage: (newMessage: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage}/>}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path="/news" render={News}/>
                <Route path="/music" render={Music}/>
                <Route path="/settings" render={Settings}/>
            </div>
        </div>
    );
}
export default App;



