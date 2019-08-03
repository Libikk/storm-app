const jwt = require('jsonwebtoken');

export const getCookie = (name, cookie) => {
    const escape = (s) => s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    var match = cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

export const getCookieData = (requestToken) => {
    const isValid = true // verify cookie with secret key and check if not expired, jwt.verify(...)
    if (isValid) {
        return jwt.decode(requestToken, { complete: true }).payload
    }
    return {};
}