import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, {addPost, RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);