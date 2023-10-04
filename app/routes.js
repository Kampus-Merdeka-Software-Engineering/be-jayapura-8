const express = require('express');
const router = express.Router();
const controller = require("./controller/index")
const orderController = require("./controller/orders")

/* route init */
router.get('/products', controller.products);

// router.get('/checkoutorder', controller.checkoutorder);

router.post('/order', orderController.orders);

// self assignment
// tambahkan 3 routes method get "/jayapura" -> res.json("ini jayapura") menggunakan middleware
// tambahkan 3 routes method post "/semarang" -> res.json("ini semarang") tidak menggunakan middleware
// tambahkan 3 routes method delete "/jakarta" -> res.json("ini jakarta") tidak menggunakan middleware

// self assignment 2
// bisa routes dan controller untuk operasi kurang, kali dan bagi

module.exports = router