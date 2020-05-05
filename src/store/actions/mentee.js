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

export const searchCollege = (keyword) => {
    const url = `http://universities.hipolabs.com/search?name=${keyword}`
    return async dispatch => {
        dispatch({
            type: "SET_LOADING",
            payload: true
        })
        const response = await axios.get(url)
        await dispatch({
            type: "SEARCH_COLLEGES",
            payload: response.data.slice(-10)
        })
        dispatch({
            type: "SET_LOADING",
            payload: false
        })
    }
}