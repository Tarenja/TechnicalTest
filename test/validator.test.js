const expect = require('chai').expect;
const validatePromotionCode = require('../index').validatePromotionCode;

describe('Validator', () => {
    it('should return true when divisible by eleven', () => {
        expect(validatePromotionCode(613884922)).to.be.true;
    });
    it('should return false when length is invalid', () => {
        expect(validatePromotionCode(11)).to.be.false;
    });
    it('should return false when not divisible by eleven', () => {
        expect(validatePromotionCode(538820102)).to.be.false;
    });
    it('should not have three-of-a-kind', () => {
        expect(validatePromotionCode(131888331)).to.be.false;
    })
});