export const addCard = (payload) => ({
    type: "ADD_CARD",
    payload
})

export const removeCard = (removeItem) => ({
    type:"REMOVE_ITEM",
    payload: removeItem
})