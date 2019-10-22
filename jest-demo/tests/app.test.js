const app = require('../app')

// test('add tool', () =>{
//     expect(app.add(4,6)).toBe(10)
// })


test('add tool with to Equal', () =>{
    expect(app.add(4,6)).toEqual(10)
})