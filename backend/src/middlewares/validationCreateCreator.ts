import { NextFunction, Request, response, Response } from "express";

export function validatialCreateCreator(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body
    if (validateFormat(res, name, email, password)) {
        return next()
    }
    else {
        return res.end()
    }
}
function validateFormat(res: Response, name: string, email: string, password: string): Boolean {
    if (formatName(res, name) === true && formatEmail(res, email) === true && formatPassword(res, password) === true) {
        return true
    }
    return false
}
function formatName(res: Response, name: String): Boolean {
    if (name.length < 3) {
        res.status(400).json({ msg: "nome precisa ter pelo menos 3 caracteres" })
        return false
    }
    return true
}
function formatPassword(res: Response, password: string): Boolean {
    if (password.length < 8) {
        res.status(400).json({ msg: "a senha deve ter pelo menos 8 caracteres" })
        return false
    }
    return true
}
function formatEmail(res: Response, email: string): Boolean {
    const domain = email.split('@')[1]
    const dotCom = domain.includes('.com')
    if (!email) {
        res.status(400).json({ msg: "email é obrigatorio" })
        return false
    }
    if (!domain) {
        res.status(400).json({ msg: 'adicione um dominio' })
        return false
    }
    if (!dotCom) {
        res.status(400).json({ msg: "acrescente o .com no final" })
        return false
    }
    return true
}
