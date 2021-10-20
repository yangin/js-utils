import { numberInRange } from '../src/utils/compare'

describe('Utils test', () => {
  test('CheckNumberInRange', () => {
    const testData = [-5, -1.2, 0, 1, 1.65, 120]
    const testSuccess = [false, false, true, true, true, false]
    const testRes = testData.map(data => numberInRange(data, '>= -1 && <= 2'))
    expect(testRes).toEqual(testSuccess)
  })
})
