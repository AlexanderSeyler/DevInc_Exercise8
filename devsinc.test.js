const tester = require('./devsInc.js');

test("check if dice is rolling random",()=>{
    expect(tester.test(5)).toBe(true);
}
);