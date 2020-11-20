export type StateType = {
    maxValue: number;
    minValue: number;
    count: number;
}

const initialState: StateType = {
    maxValue: 0,
    minValue: 0,
    count: 0
}

type incValueType = ReturnType<typeof incValueAC>
type resetValueType = ReturnType<typeof resetValueAC>
type setValueType = ReturnType<typeof setValueAC>

type ActionType = incValueType | resetValueType | setValueType

export const countReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INC-VALUE':     
            return { ...state, minValue: state.minValue + 1 }
        case 'RESET-VALUE':
            return { ...state, minValue: state.count };

        case "SET-VALUE": {
            return {
                ...state,
                minValue: action.minValue,
                maxValue: action.maxValue,
                count: action.count
            }
        }
        default:
            return state
    }
}

export const incValueAC = () => ({
    type: 'INC-VALUE'
} as const)

export const resetValueAC = () => ({
    type: 'RESET-VALUE',
} as const)

export const setValueAC = (maxValue: number, minValue: number, count: number) => ({
    type: 'SET-VALUE',
    maxValue,
    minValue,
    count
}as const )