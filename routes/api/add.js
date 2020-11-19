var express = require('express');
var router = express.Router();

/* POST ADD API listing. */
router.post('/', function(req, res, next) {
    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var sum = num1 + num2;
    var data = {};
    data['sum'] = sum;
    res.send(data);
});

module.exports = router;
