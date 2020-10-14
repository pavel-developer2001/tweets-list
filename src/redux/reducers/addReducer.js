const initialState = {
    cards: [
        "Сделать приложение на Redux",
        "Выучить Redux"
    ]
}

const addReducer = ( state=initialState, action) => {
    switch (action.type){
        case "ADD_CARD":
                return {
                    ...state,
                    cards: [...state.cards, action.payload]
                }
        default:
            return state
    }
}

export default addReducer