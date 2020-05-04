import axios from 'axios'

export const chooseMentee = (name) => {
    return {
        type: "CHOOSE_MENTEE",
        payload: name
    }
}

export const addMentee = (name) => {
    return {
        type: "ADD_MENTEE",
        payload: name
    }
}

export const resetState = () => {
    console.log('ressseett')
    return {
        type: "RESET_STATE"
    }
}

export const getData = () => {
    const url = 'https://5e9921015eabe7001681c784.mockapi.io/mentees'
    return async dispatch => {
        const response = await axios.get(url)
        dispatch({
            type: "GET_DATA",
            payload: response.data
        })
    }
}