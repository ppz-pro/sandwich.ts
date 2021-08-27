const Sandwich = require('../index').default

let f = Sandwich(
  [
    function(vege, num) {
      return vege(num + 2)
    },
    function(vege, num) {
      return vege(num + 3)
    }
  ],
  function(num) {
    return num + 1
  }
)

test('数值', () => {
  expect(f(0)).toBe(6)
  expect(f(6)).toBe(12)
})