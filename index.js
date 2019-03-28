const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
    res.render('main', {title: "Validate Your OneFit Promotion Code!"});
});

app.post('/', (req,res) => {
    let number = req.body.promo;
    let validate = validation.validatePromotionCode(number);
    if (validate === true) {
      res.render('main', {title: "You Are a Winner!", data: number});  
    } else {
        res.render('main', {title: "Code Invalid!", data: number, invalid: "invalid"});
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

class Validator {
    validatePromotionCode(number) {
        let multiplied = 0;
        let num = number.toString();
        for (let i = 0, j = 9; i < num.length, j > 0; i++, j--) {
            if (num[i] === num[i+1] && num[i] === num[i+2]) {
                return false;
            } else {
                multiplied += (num[i] * j);
            }
        }
        if ((multiplied / 11) % 1 === 0 && num.length === 9) {
            return true;
        }
        return false;
    }
}

let validation = new Validator();

module.exports = validation;
