module.exports = {
    validatePromotionCode: (number) => {
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