const findRotationCount = require("./find-rotation-count")

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
    expect(findRotationCount([45, 14, 18, 22, 35, 36, 39])).toBe(1);
    expect(findRotationCount([4, 6, 10, 13, 22, 67, 89])).toBe(0);
    expect(findRotationCount([432, 450, 489, 33, 57, 88, 91, 249])).toBe(3);
  })
})