const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })
// Test mit negativen Zahlen
it('should add negative numbers', function () {
    expect(sum([-1, -2, -3])).to.equal(-6);
});

// Test mit einem leeren Array
it('should return zero for an empty array', function () {
    expect(sum([])).to.equal(0);
});

// Test mit positiven und negativen Zahlen
it('should add positive and negative numbers', function () {
    expect(sum([10, -5, 3])).to.equal(8);
});

});