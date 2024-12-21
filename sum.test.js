const sum = require('./sum')

test('adds two number', () => {
    // if (sum(1, 2) === 3){
    //     console.log("Test Complete!")
    // } else {
    //     console.log("Error!")
    // }

    expect(sum(1,2)).toBe(3)
})