const initState = {
    themeId: 1,
}

export type themeIdType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdACType): themeIdType => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

type changeThemeIdACType = {
    type: 'SET_THEME_ID',
    id: number
}


export const changeThemeId = (id: number): changeThemeIdACType => ({type: 'SET_THEME_ID', id}) // fix any
