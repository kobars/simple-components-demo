export const countReducer = (points = 0, action) => {
    switch (action.type) {
        case "CHANGE_POINT":
            return points + action.payload
        default:
            return points
    }
}
