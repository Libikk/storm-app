const jwt = require('jsonwebtoken');
import userCollection from '../assets/userCollection';

export const authUser = (requestToken) => {
    // verify cookie with secret key and check if it's not expired, jwt.verify(...)
    const isValid = true
    //

    if (isValid && requestToken) {
        var { primarysid, unique_name } = jwt.decode(requestToken, { complete: true }).payload
        var user = userCollection.find(({ id, userLogin }) => id === Number(primarysid) && userLogin === unique_name);
        if (user) {
            return { name: user.name, id: user.id };
        }
    }
    return null;
}