import Product from "../models/Produt.js"


export async function index (req,res,next){
    try {
        const userId = req.session.userId

        res.locals.products = await Product.find({ owner: userId })
       
    
        res.render('home')
        
    } catch (error) {
        next(error)
        
    }

}

export function paramInRoutuer(req, res, next){
    const num = req.params.num
    res.send('me has pasado '+ num)
}
