import Prodcut from "../models/Produt.js"

export function index(req, res, next){
    res.render('new-product')
}

export async function postNew(req, res,next){
    try {
        const {name, price} = req.body
        const userId = req.session.userId
        //FALTAN VALIDACIONES EXPRESS VALIDEITOR
  
        const product = new Prodcut({name:name,price:price,url:"https://picsum.photos/300/200?random=<%=", owner: userId})

        await product.save()

        res.redirect('/')

    } catch (error) {
        next(error)
        
    }
}
export async function deleteProduct(req, res, next) {
    try{
        const productId = req.params.productId
        const userId= req.session.userId

        await Prodcut.deleteOne({_id: productId, owner: userId})

        res.redirect('/')
        
    }catch(error){
        next(error)
    }
    
}