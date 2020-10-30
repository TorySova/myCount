type StateType = typeof initialState

const initialState = {
    maxValue: 0,
    minValue: 0,
    error: '',
    count: 0
}

type ActionType = incValueType | resetValueType

type incValueType = {
    type: string;
}

type resetValueType = {
    type: string;
}

export const countReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INC-VALUE':

        
            return { ...state, minValue: state.minValue + 1 };
        case 'RESET-VALUE':
            return { ...state, minValue: state.minValue };
        default:
            return state
    }
}

export const incValueAC = (): incValueType => ({
    type: 'INC-VALUE'
})

export const resetValueAC = (): resetValueType => ({
    type: 'RESET-VALUE',
})