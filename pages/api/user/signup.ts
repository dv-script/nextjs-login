import { signUp } from "../../../services/user";

export default function handler(req, res) {
    try {
        const newUser = signUp(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json(error.message)
    }
}