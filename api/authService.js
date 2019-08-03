import axios from 'axios'

export default class AuthService {
    static login = async ({ userName, password }) =>  axios.post('/api/token', { userName, password }).then(({ data }) => data);;
}
