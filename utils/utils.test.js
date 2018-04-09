const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res} instead.`);
    // }
});

it('should square one number', ()=>{
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
    // if (res !== 4){
    //     throw new Error (`Expected 4, but got ${res} instead.`);
    // }
});

it('should expect some values', ()=>{
    expect(12).toNotBe(13);
});