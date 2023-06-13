import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";


const rerenderEntireTree = () => {
    ReactDOM.render(<BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}/>
        </BrowserRouter>, document.getElementById("root")
    );
}


store.subscribe(rerenderEntireTree);
rerenderEntireTree();
