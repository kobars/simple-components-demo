export const changePoints = (amount = 1) => {
    return {
        type: "CHANGE_POINT",
        payload: amount
    }
}

