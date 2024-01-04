const initState: IsLoadingStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): IsLoadingStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export type IsLoadingStateType = {
    isLoading: boolean
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
