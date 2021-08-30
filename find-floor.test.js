const findFloor = require("./find-floor")

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1
    expect(findFloor([1, 3, 4, 4, 5, 6, 7, 8, 12, 15, 18], 30)).toBe(18);
    expect(findFloor([1, 3, 4, 4, 5, 6, 7, 8, 12, 15, 18], 17)).toBe(15);
    expect(findFloor([1, 3, 4, 4, 5, 6, 7, 8, 12, 15, 18], 8)).toBe(8);
  })
})