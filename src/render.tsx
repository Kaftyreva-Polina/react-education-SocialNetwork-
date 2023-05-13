import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addMessage, addPost, RootStateType, updateMessageText, updatePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(<BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}
                 addMessage={addMessage} updateMessageText={updateMessageText}/>
        </BrowserRouter>, document.getElementById("root")
    );
}

