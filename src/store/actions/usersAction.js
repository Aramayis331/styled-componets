import { ADD_USER } from "../actionTypes/usersTypes"

export const addUsers = (registerUser) => {
    return {
        type: ADD_USER,
        payload: registerUser
    }
}