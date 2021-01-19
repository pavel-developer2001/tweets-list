const initialState =  [
       {id:1, text:"Сделать приложение на Redux", likes: 15},
       {id:2, text: "Выучить Redux", likes: 20}
    ]


const addReducer = ( state=initialState, action) => {
    switch (action.type){
        case "ADD_CARD":
                return [...state, action.payload]
        case "REMOVE_ITEM":
            return action.payload  
        case "EMIT_ITEM":
            return action.payload             
        default:
            return state
    }
}

export default addReducer