import { sum, sub, mul, div, mod } from './functionsToTest'

describe.skip('functionsToTest', () => {
  const [a, b] = [10, 20]
  it('should be able to sum two values', () => {
    const response = sum(a, b)

    expect(response).toBe(30)
  })
  it('should be able to sub two values', () => {
    const response = sub(b, a)

    expect(response).toBe(10)
  })
  it('should be able to mul two values', () => {
    const response = mul(a, b)

    expect(response).toBe(200)
  })
  it('should be able to div two values', () => {
    const response = div(b, a)

    expect(response).toBe(2)
  })
  it('should be able to mod two values', () => {
    const response = mod(b, a)

    expect(response).toBe(0)
  })
})
