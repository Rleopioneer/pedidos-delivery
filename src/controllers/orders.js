const OrdersModel = require('../models/orders')


async function get(req, res) {

    const { id } = req.params

    const obj = id ? { _id: id} : null

    const orders = await OrdersModel.find(obj)

    res.send(orders)
    

}
 
async function post(req, res) {

    const {
        clientCode,
        productsCode,
        dateCreation,
        status
    } = req.body

    console.log(req.body)

    const order = new OrdersModel({
        clientCode,
        productsCode,
        dateCreation,
        status
    })

    order.save()

    res.send({
        message: 'Success'
    })

}
/* 
async function put(req, res) {

    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, { new: true })

    res.send({
        message:'Success',
        product
    })

} */
/* 
async function del(req, res) {

    const { id } = req.params

    const del = await ProductsModel.deleteOne({ _id: id})

    const message = del.ok ? 'Success' : 'error'

    res.send({
        message: 'Success'
    })


} */



module.exports = {
    get,
    post,
    //put,
    //del,
}