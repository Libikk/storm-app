const jwt = require('jsonwebtoken');
import userCollection from '../assets/userCollection';

export const getCookie = (name, cookie) => {
    const escape = (s) => s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    var match = cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

export const authUser = (requestToken) => {
    // verify cookie with secret key and check if it's not expired, jwt.verify(...)
    const isValid = true
    //

    if (isValid && requestToken) {
        var { primarysid, unique_name } = jwt.decode(requestToken, { complete: true }).payload
        var user = userCollection.find(({ id, name }) => id === primarysid && name === unique_name )
        if (user) {
            return { name: user.name, id: user.id };
        }
    }
    return null;
}