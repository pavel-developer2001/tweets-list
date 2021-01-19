export const addCard = (payload) => ({
    type: "ADD_CARD",
    payload
})

export const removeCard = (removeItem) => ({
    type:"REMOVE_ITEM",
    payload: removeItem
})

export const emitCard = (emitItem) => ({
    type:"EMIT_ITEM",
    payload: emitItem
})