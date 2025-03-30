import path from 'node:path'
import express from 'express'
import createHttpError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeController.js'
import ejs from 'ejs'
import connectMongoose from './Lib/connectMongoose.js'
import * as loginController from './controllers/loginController.js'
import * as sessionManger from './Lib/sessionManager.js'
import * as agentsController from './controllers/agentsController.js'



await connectMongoose() //top level await thanks to ES modules
console.log('connected to Mongodb')
const app = express()

app.set('views','views')
app.set('view engine','ejs')
app.engine('ejs',ejs.__express)

app.locals.appName = "Nodepop"

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(import.meta.dirname, 'public')))

/**
 * Aplication routes
 */
app.use(sessionManger.middleware)
app.use(sessionManger.useSessionInViews)
app.get('/', homeController.index)
app.get('/login', loginController.index)
app.post('/login',loginController.postLogin)
app.get('/logout',loginController.logout)
app.get('/products/new', sessionManger.guard, agentsController.index)
app.post('/products/new',sessionManger.guard, agentsController.postNew)
app.get('/products/delete/:productId', sessionManger.guard, agentsController.deleteProduct)

//catch 404 and error
app.use((res,req,next)=>{
    next(createHttpError(404))
})

//error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.locals.message = err.message
    res.locals.error = process.env.NODEPOP_ENV === 'development'?err :{}
    res.render('error')
})
export default app 