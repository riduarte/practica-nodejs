import session from "express-session";
import MongoStore from "connect-mongo"; 

const INACTIVITY_EXPIRATION_2_DAYS=100*60*60*24*2
export const middleware = session({
    name: 'nodepop-session',
    secret:'vE&$L3[:ex;MKArf{47u8D_`dV)y+G<.*(,?k#"b6=P5!N',
    saveUninitialized:true,
    resave:false,
    cookie:{ maxAge:INACTIVITY_EXPIRATION_2_DAYS}, 
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/nodepop'
    })
})

export function useSessionInViews(req, res, next){
    res.locals.session = req.session 
    next()
}

export function guard(req, res, next){
    if(!req.session.userId){
        res.redirect(`/login?redir=${req.url}`)
        return
    }
    next()
}