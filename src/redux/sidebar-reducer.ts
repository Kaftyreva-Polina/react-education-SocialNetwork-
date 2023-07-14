import {ActionsPropsType, SidebarPageType} from "./store";

const initialState: SidebarPageType = {}
const sidebarReducer = (state = initialState, action: ActionsPropsType): SidebarPageType => {
    switch (action.type) {
        default:
            return state
    }
}

export default sidebarReducer;