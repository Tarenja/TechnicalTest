# Junior Front-End Technical Test

## Answers to the questions in the Readme below, for the coding assignment check the test folder, index.js and other files

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

    Well, the only Front-End framework I have worked with enough to form an opinion on it is Angular. I have worked a little with Vue but not enough to compare.
    I like Angular because there is a lot built-in, it comes with a lot of stuff to make building applications faster. The documentation is good, if a bit sparse in places, but it's so widely used that there are a lot of tutorials and informational articles about it. I like using Typescript with it it's very organised and clean.
    What I don't like so much is that it is so big. It's good that it comes with a lot of stuff, but it comes with too much. It's a bit bloated and makes huge builds that can be a bit unwieldy. Also a bit slow compared to when I've used Vue.

    If you meant Bootstrap, Materialize e.g, then I can say the one I have actually used a lot is Zurb Foundation. I haven't used many other ones except for Materialize, which I also liked, but has a lot less features than Foundation. I like foundation because it can do a lot. There are a lot of components and extras included, the documentation is very good, there's tons of resources about it.
    The thing I don't like is that it can sometimes be very frustrating when you're trying to override styling from foundation that is applied by default, it takes a lot of specificity to override it. I also don't like that it's quite verbose, and very specific.

3. Convert the following into ES6

    ```javascript
    'use strict'​;
    function​ ​Shape​(id, x, y) {
   ​    this​.id = id;
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

    ES6 conversion:

    ```javascript
    'use strict'​;
    class Shape {
        constructor (id, x, y) {
            this.id = id;
            this.setLocation(x, y);
        };
        setLocation (x, y) {
            this.x = x;
            this.y = y;
        };
        getLocation () {
            return {
                x: this.x,
                y: this.y
            }
        };
        toString () {
            return `Shape(${this.id})`
        };
    };

    class Circle extends Shape {
        constructor (id, x, y, radius) {
           super(id, x, y);
           this.radius = radius;
        };
        toString() {
            return `Circle > ${super.toString()}`
        };
    };
    ```

4. You've made changes in your current working directory and want to stage some,
but not all, of these changes. Please type out the git command you would use:

    ```git add [filename.txt]```

5. You've started a new feature branch from master. After creating a few of your own
commits you want to update your branch with any updates that might have
happened on master. But, you'd rather not polute the project history with an extra
commit. What do you do?
   - [ ] $ git pull origin master
   - [ ] $ git checkout master; git pull; git checkout feature;
   git merge master
   - [x] $ git fetch; git rebase origin/master
   - [ ] $ git fetch origin/master; git merge

6. What are your favorite ES6 features?

    Personally I really like the template literals, just because of how much shorter it makes string concatenation and interpolation.
    I also like the classes, it's much cleaner and more logical than the functions used before.
    Promises are also very nice, especially when retrieving data from an api.

7. What is an Arrow function? What are its uses? How it differs from normal
function?

    Arrow functions are a more concise way to write function expressions, using the =>
    They are anonymous functions.
    With these we don't have to write the function or return keywords.
    We can avoid parentheses around the parameters if there is only 1 parameter.
    They also make it easier to use the 'this' keyword as the scope stays inside the function.

8. What are the advantages and disadvantages of SASS?

    Advantages:
    - You have to write a lot less syntax
    - You can use variables and mixins in your code to avoid duplication
    - You can use mathematical and operational functions (such as 'lighten' and 'darken')
    - You can use nesting and chain selectors
    - You can import and join lots of files together, creating a cleaner file structure

    Disadvantages:
    - You have to compile it
    - There is more of a learning curve
    - If you are not careful you can create much bigger compiled CSS than necessary, can get out of control
    - It can get confusing if you nest things too much
    - Changes to the HTML can break your styling

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