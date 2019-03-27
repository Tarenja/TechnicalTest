# Junior Front-End Technical Test

1. Of the following tech, which do you feel comfortable with?
   - [ ] React
   - [ ] AngularJS
   - [x] Angular
   - [ ] Vue
   - [ ] VueX
   - [ ] Redux
   - [ ] Redux-saga
   - [ ] Immutable.JS
   - [ ] Flow
   - [x] TypeScript
   - [ ] Jest, Enzyme, Chai or similar
   - [ ] Cypress
   - [x] ES6
   - [x] Node.js / Express
   - [ ] PHP
   - [ ] Socket.IO
   - [ ] Docker
   - [ ] Webpack
   - [ ] Cypress
   - [x] Git
   - [ ] CI/CD
   - [ ] AWS
   - [ ] Arceus
   - [x] CSS / Sass

2. Choose your favorite Front-End framework. What do and don't you like about it?
Please make a comparison against other frameworks you might know.

3. Convert the following into ES6

   ```javascript
   'use strict'​;
   function​ ​Shape​(id, x, y) {
   ​this​.id = id;
       ​this​.setLocation(x, y);
   }

   Shape.prototype.setLocation = ​function​(x, y) {
       ​this​.x = x;
       ​this​.y = y;
   };

   Shape.prototype.getLocation = ​function​() {
       ​return​ {
       x: ​this​.x,
       y: ​this​.y
       };
   };

   Shape.prototype.toString = ​function​() {
   ​   return​ ​'Shape('​ + ​this​.id + ​')'​;
   };

   function​ ​Circle​(id, x, y, radius) {
       Shape.call(​this​, id, x, y);
       ​this​.radius = radius;
   }

   Circle.prototype = ​Object​.create(Shape.prototype);

   Circle.prototype.constructor = Circle;

   Circle.prototype.toString = ​function​() {
       ​return​ ​'Circle > '​ + Shape.prototype.toString.call(​this​);
   };
   ```

4. You've made changes in your current working directory and want to stage some,
but not all, of these changes. Please type out the git command you would use:

5. You've started a new feature branch from master. After creating a few of your own
commits you want to update your branch with any updates that might have
happened on master. But, you'd rather not polute the project history with an extra
commit. What do you do?
   - [ ] $ git pull origin master
   - [ ] $ git checkout master; git pull; git checkout feature;
   git merge master
   - [ ] $ git fetch; git rebase origin/master
   - [ ] $ git fetch origin/master; git merge

6. What are your favorite ES6 features?

7. What is an Arrow function? What are its uses? How it differs from normal
function?

8. What are the advantages and disadvantages of SASS?

9. Coding Assignment
   To promote our product, we have decided to launch a campaign where users can
   win a free year of OneFit membership. During Amsterdam marathon, we have
   runners participating with promotional codes printed on their shirt. One code is the
   lucky one!
   The promotion codes are generated in the following format:
      - Nine numerical characters
      - When multiplying the first number by 9, the second by 8, the third by 7, and so
      on... the resulting number should be divisible by 11
      - A single digit may not appear more than twice next to each other
      Examples
      - 613884922 is valid, because 6×9 + 1×8 + 3×7 + 8×6 + 8×5 + 4×4 + 9×3 + 2×2
      - 2×1 = 220 / 11 = 20 (whole number, no digit is repeated 3+ times)
      - 538820102 is invalid, because 5×9 + 3×8 + 8×7 + 8×6 + 2×5 + 0×4 + 1×3 +
      0×2 + 2×1 = 188 / 11 = 17.09 (not a whole number)
      - 131888331 is invalid (digits 8 appears as three-of-a-kind)
   On our website a user can enter a promotion code to see if he/she won. We need a
   validator function to quickly determine if an entered promotion code is in the right
   format. Your assignment is to finish the following validator function to pass the unit
   tests.

   ```javascript
    const​ expect = ​require​(​'chai'​).expect;
    describe(​"Validator"​, () => {
       it(​"should return true when divisible by eleven"​, () => {
           expect(validatePromotionCode(​613884922​)).to.be.true
       })
       it(​"should return false when length is invalid"​, () => {
           expect(validatePromotionCode(​11​)).to.be.false
       })
       it(​"should return false when not divisible by eleven"​, () => {
           expect(validatePromotionCode(​538820102​)).to.be.false
       })
       it(​"should not have three-of-a-kind"​, () => {expect(validatePromotionCode(​131888331​)).to.be.false
       })
    })
   ```

10. Implement a small website/form to check if a user won the free membership we
discussed in the previous assignment. This should include the validator you
implemented and showing the result. You should also implement a basic API
endpoint for that. Adding creative styling will give you extra bonus points (you can
use any framework of choice - e.g. bootstrap).