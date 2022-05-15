import axios from 'axios';

export const authUser = (dataAuth) => {
    return async (dispatch) => {
        const res = await axios.post('https://api.fullstats.ru/api/v1/auth/login', {
            username: dataAuth.email,
            password: dataAuth.password
        })
        console.log(res)
    }
}