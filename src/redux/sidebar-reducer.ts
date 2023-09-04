type SidebarPageType = {}
type ActionsPropsType = { type: string }

const initialState: SidebarPageType = {}
const sidebarReducer = (state = initialState, action: ActionsPropsType): SidebarPageType => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export default sidebarReducer;