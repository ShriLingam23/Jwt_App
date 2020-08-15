// Here export an object containing the description of some HTTP status code, 
// it's just to avoid decorating the code numbers. 

module.exports = {
    OK: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    found: 302,
    badRequest: 400,
    unauthorized: 401,
    paymentRequired: 402,
    forbidden: 403,
    notFound: 404,
    notAcceptable: 406,
    conflict: 409,
    unprocessable: 422,
    locked: 423,
    tooManyRequests: 429,
    serverError: 500,
}