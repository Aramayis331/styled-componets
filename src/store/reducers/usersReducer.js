import { ADD_USER } from "../actionTypes/usersTypes"

const initialUsers = []

export const usersReducer = (state=initialUsers, action) => {
    switch(action.type) {
        case ADD_USER: 
            return [...state, action.payload]


        default:
            return state
    }

}