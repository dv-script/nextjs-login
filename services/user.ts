import jwt from 'jsonwebtoken';

let users = []

const SECRET = process.env.JWT_SECRET

function createToken(user) {
    return jwt.sign({ email: user.email, name: user.name }, SECRET)
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET)
    } catch (error) {
        throw new Error('Invalid token')
    }
}

export function signUp(body) {
    const user = users.find(({ email }) => email === body.email)

    if (user) throw new Error('User already exists')

    users.push(body)

    const token = createToken(body)
    return token
}

export function login(body) {
    const user = users.find(({ email, password }) => email === body.email)

    if (!user) throw new Error('User not found')
    if (user.password !== body.password) throw new Error('Invalid password')

    const token = createToken(user)
    return token
}