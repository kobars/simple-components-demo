const initialState = {
    chosenMentee: '',
    mentees: [],
    data: []
}

export const menteesReducer = (allMentees = initialState, action) => {
    switch (action.type) {
        case "CHOOSE_MENTEE":
            return {
                ...allMentees,
                chosenMentee: action.payload
            }
        case "ADD_MENTEE":
            return {
                ...allMentees,
                mentees: [...allMentees.mentees, action.payload]
            }
        case "GET_DATA":
            return {
                ...allMentees,
                data: action.payload
            }
        case "RESET_STATE":
            return {
                ...initialState
            }
        default:
            return allMentees
    }
}

