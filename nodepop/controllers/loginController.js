import Agent from "../models/Agent.js"


export function index(req,res,netx){
    res.locals.error=''
    res.locals.email=''
    res.render('login')
}

export async function postLogin(req, res, next){
    try {
        const {email, password} = req.body
        const redir = req.query.redir

        const user = await Agent.findOne({email: email})

        if(!user || !(await user.comparePassword(password))){
            res.locals.error = 'Invalid credentials'
            res.locals.email = email
            res.render('login')
            return
        }
        req.session.userId = user.id
        req.session.userName= user.name
        res.redirect(redir ? redir : '/')
        
    } catch (error) {
        next(error)
        
    }

}

export function logout(req, res, next){
    req.session.regenerate(err =>{
        if(err){
            next(err)
            return
        }
        res.redirect('/')
    })

}